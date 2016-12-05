deckAddRemove = function (doc) {
	_.extend(this, doc);
};

_.extend(deckAddRemove.prototype, {
	
	addToDeck: function(newPanel){
		var _prev;
		var _next;
		
		var _last;
		
		_last = this.getLast();
		
		this.cardList.push(newPanel);
		this.setAdjacent(_last, newPanel);
		this.deckSize = this.cardList.length;
		
		if(['Class','Faction','Race','Trait','Feat','Augment','Item'].indexOf(this.deckType) > -1){
			for(var i = 0; i < this.deckSize; i++){
				this.cardList[i].deckSize = this.deckSize;
			}
			newPanel.deckId = this._id;
			newPanel.cardNumber = this.deckSize;
		}
	},
	
	removeFromDeck: function(panel){
		var _index = this.cardList.indexOf(panel);
		var _prev = this.getPrev(panel._id);
		var _next = this.getNext(panel._id);
		
		this.cardList.splice(_index, 1);
		this.setAdjacent(_prev, _next);
		this.deckSize = this.cardList.length;
		
		if(['Class','Faction','Race','Trait','Feat','Augment','Item'].indexOf(this.deckType) > -1){
			
			for(var i = 0; i < this.deckSize; i++){
				this.cardList[i].deckSize = this.deckSize;
			}
			
			var _test = _next;
			_test.cardNumber--;
			while(_test.below || _test.right){
				_test = this.getNext(_test._id);
				_test.cardNumber--;
			}
		}
	},
	
	replaceCard: function(oldCard, newCard){
		
		var _index = this.getPanelIndex(oldCard._id);
		var _prev = this.getPrev(oldCard._id);
		var _next = this.getNext(oldCard._id);
		var _newCard = Object.assign({}, newCard);
		
		_newCard.above = null;
		_newCard.below = null;
		_newCard.left = null;
		_newCard.right = null;
		
		if(oldCard.cardType !== 'Item'){
			_newCard.cardLevel = oldCard.cardLevel;
		}
		
		this.mergeGap(_prev, _newCard);
		this.mergeGap(_newCard, _next);
		
		this.cardList[_index] = _newCard;
		
		this.setPanelPosition();
	}
	
});