deckObject = function (doc) {
	_.extend(this, 
	  new deckAddRemove(
	    new deckSetters(
	      new deckGetters(
	      	new deckMovement(doc)
	      )
	    )
	  )
	);
};

_.extend(deckObject.prototype, {
	
	cardMoved: [],
	
	testPanelIds: function(){
		var results = [];
		var refArray = [];
		
		if(this.cardList.length === 0) return;
		
		var _curr = this.getFirst();
		var _index = this.getPanelIndex(_curr._id);
		var _next;
		var _last = this.getLast();
		
		var _continue = true;
		var _count = 0;
		var _length = this.cardList.length;
		
		while( _continue ){
			
			if(_curr.below || _curr.right){
				if(_count < _length){
					if(_curr.below){
						_next = this.getPanel(_curr.below);
					} else if(_curr.right){
						_next = this.getPanel(_curr.right);
					}
					
					refArray.push(this.getPanelIndex(_curr._id));
					
					_curr = _next;
					_count++;
				} else if(_count > _length){
					_continue = false;
					results.push('FAIL: Loop count greater than cardList length');
				}
			} else if(!_curr.below && !_curr.right){
				if(_count === _length - 1){
					_continue = false;
					refArray.push(this.getPanelIndex(_last._id));
					results.push('PASS: _count + 1 === _length');
				} else {
					_continue = false;
					results.push('FAIL: Loop count less than cardList length');
				}
			}
		}
		
		for(var i = 0; i < _length; i++){
			
			var _index = this.getPanelIndex(this.cardList[i]._id);
			var _order = this.getPanelOrder(this.cardList[i]._id);
			
			//console.log(_index+' / '+refArray[i]+' / '+_order);
			
			if(refArray.indexOf(_index) < 0){
				results.push('FAIL: Unused reference id - '+this.cardList[i]._id);
			}
			
		}
		
		console.log('--- testPanelIds ---');
		for(var i = 0; i < results.length; i++){
			console.log(results[i]);
		}
		
	},
	
	testCollision: function(that){
		var result = 'pass';
		for(var i = 0; i < this.cardList.length; i++){
			_thisCard = this.cardList[i];
			for(var ii = 0; ii < that.cardList.length; ii++){
				_thatCard = that.cardList[ii];
				if(_thisCard._id === _thatCard._id){
					console.log('Error: card _id collision: '+_thisCard._id+' === '+_thatCard._id);
					result = 'fail';
				}
			}
		}
		console.log('Collision Test: '+ this.name+' / '+that.name+' ==> Result: '+result);
	}
	
});