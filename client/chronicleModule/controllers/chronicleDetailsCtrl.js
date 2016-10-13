angular.module("freedomsworn")
	.controller("ChronicleDetailsCtrl", 
		function($rootScope, $scope, $reactive, $stateParams, $location, chronicleBread){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.chronicleId = $stateParams.chronicleId;
			
			this.subscribe('chronicles', 
				() => [this.chronicleId],
				{
					onStart: function(){
						console.log('onStart');
					},
					onReady: function(){
						console.log('onReady');
					},
					onStop: function(){
						console.log('onStop');
					}
				}
			);
			
			this.autorun(() => {
				
				this.getReactively('clock');
				
				if(this.chronicle){
					
					if(this.chronicle.timeline.length){
						stopTime = this.chronicle.timeline[this.chronicle.timeline.length-1].stopTime
					} else {
						stopTime = 0;
					}
					
					this.chronicle.timer = this.chronicle.getTimeElapsed(this.chronicle.startTime, stopTime);
					
					this.chronicle.setPlayerCount();
				}
				
				
			});
			
			this.autorun(() => {
				
				this.getReactively('chronicle.timeline', true);
				
				if(this.chronicle){
					
					Chronicles.update({
						_id: this.chronicle._id
					}, { $set: 
						{
							name: this.chronicle.name,
							timerSpeed: this.chronicle.timerSpeed,
							timer: this.chronicle.timer,
							pause: this.chronicle.pause,
							timeline: this.chronicle.timeline,
							players: this.chronicle.players
						}
					});
				}
			});
			
			this.helpers({
				chronicle(){
					return Chronicles.findOne({_id: $stateParams.chronicleId});
				},
				clock(){
					return Chronos.now(100);
				}
			});
			
			this.togglePause = function(){
				
				var timestamp = this.clock;
				
				var chronicle = this.getReactively('chronicle');
				
				console.log(chronicle);
				
				if(chronicle.pause){
					chronicle.pause = false;
					chronicle.timeline.push({ startTime: timestamp, timerSpeed: chronicle.timerSpeed });
					
				} else {
					chronicle.pause = true;
					chronicle.timeline[chronicle.timeline.length-1].stopTime = timestamp;
				}
				
				
			};
			
			this.resetTimer = function(chronicle){
				console.log('resetTimer');
				chronicle.timeline.length = 0;
				
				chronicle.startTime = new Date().getTime();
				
				this.timer = this.chronicle.timer ? this.chronicle.timer : 0;
				
				for(var i = 0; i < chronicle.players.length; i++){
					var player = chronicle.players[i];
					player.actions.length = 0;
					player.count = 0;
				}
			};
			
		});