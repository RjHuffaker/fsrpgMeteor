chronicleObject = function (doc) {
	_.extend(this, doc);
};

_.extend(chronicleObject.prototype, {
	
	takeAction: function(player, action){
		console.log(player, action);
		if(player.count >= action.count && !this.paused()){
			action.timestamp = new Date().getTime();
			player.actions.push(action);
			if(this.pauseOnAction){
				this.timeline[this.timeline.length-1].stopTime = action.timestamp;
			}
		}
	},
	
	setPlayerCount: function(){
		for(var i = 0; i < this.players.length; i++){
			var player = this.players[i];
			var lastAction = player.actions[player.actions.length - 1];
			var timestamp = new Date().getTime();
			
			if(lastAction){
				player.count = this.getTimeElapsed(lastAction.timestamp, timestamp);
			} else {
				player.count = this.getTimeElapsed(this.startTime, timestamp);
			}
			
		}
	},
	
	getTimeElapsed: function(startTime, stopTime){
		var timePassed = 0;
		for(var i = 0; i < this.timeline.length; i++){
			var increment = this.getIncrement(this.timeline[i], startTime, stopTime);
			timePassed += increment;
		}
		return timePassed;
	},
	
	getIncrement: function(increment, startTime, stopTime){
		var incrementStop = increment.stopTime ? increment.stopTime : stopTime;
		var incrementStart = increment.startTime;
		
		if(stopTime < incrementStart || incrementStop < startTime){
			return 0;
		} else {
			var _startTime = 0, _stopTime = 0;
			
			if(incrementStart <= startTime){
				_startTime = startTime;
			} else {
				_startTime = incrementStart;
			}
			
			if(stopTime <= incrementStop){
				_stopTime = stopTime;
			} else {
				_stopTime = incrementStop;
			}
			
			return Math.round(increment.timerSpeed/100 * (_stopTime - _startTime));
		}
	},
	
	paused: function(){
		if(this.timeline.length === 0){
			return true;
		} else {
			if(this.timeline[this.timeline.length-1].stopTime){
				return true;
			} else {
				return false;
			}
		}
	}
	
});