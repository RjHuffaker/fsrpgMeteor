deckSetters = function (doc) {
	_.extend(this, doc);
};

_.extend(deckSetters.prototype, {
	
	setCardList: function(){
		if(['Class','Faction','Race','Trait','Feat','Augment','Item'].indexOf(this.deckType) > -1){
			this.cardList.sort(function(a, b){
				console.log(a.cardNumber, b.cardNumber);
				console.log(a.name, b.name);
				return a.cardNumber - b.cardNumber;
			});
		}
		
		var _length = this.cardList.length;
		for(var i = 0; i < _length; i++){
			var _previous = this.cardList[i-1] || null;
			var _current = this.cardList[i];
			var _next = this.cardList[i+1] || null;
			
			_current.dragging = false;
			_current.locked = false;
			_current.above = null;
			_current.below = null;
			_current.left = null;
			_current.right = null;
			if(['Class','Faction','Race','Trait','Feat','Augment','Item'].indexOf(this.deckType) > -1){
				_current.cardNumber = i+1;
				_current.deckSize = _length;
				_current.deckId = this._id;
			}
			
			if(_previous) _current.left = _previous._id;
			if(_next) _current.right = _next._id;
		}
		
		this.setPanelPosition();
	},
	
	setDeckSize: function(){
		var _length = this.cardList.length;
		this.deckSize = _length;
		for(var i = 0; i < _length; i++){
			this.cardList[i].decksize = _length
		}
	},
	
	setAdjacent: function(leftPanel, rightPanel){
		leftPanel.below = null;
		leftPanel.right = rightPanel._id;
		rightPanel.above = null;
		rightPanel.left = leftPanel._id;
	},
	
	setOverlap: function(abovePanel, belowPanel){
		abovePanel.below = belowPanel._id;
		abovePanel.right = null;
		belowPanel.above = abovePanel._id;
		belowPanel.left = null;
	},
	
	setCardMoving: function(direction){
		Meteor.clearTimeout(this.moveTimer);
		this.cardMoving = true;
		this.cardMoved.push(direction);
		this.moveTimer = Meteor.setTimeout(function(){
			this.cardMoving = false;
			Meteor.clearTimeout(this.moveTimer);
		}, 500);
	},
	
	setCardStop: function(){
		this.cardMoving = false;
		this.cardMoved.length = 0;
	},
	
	
	setPanelPosition: function(){
		if(this.cardList.length === 0) return;
		
		var _curr = this.getFirst();
		var _next;
		var _last = this.getLast();
		
		var _continue = true;
		var _count = 0;
		var _length = this.cardList.length;
		
		var _x_next = 0;
		var _y_next = 0;
		var _z_next = _length * 100;
		
		while( _continue ){
			if(_curr.below || _curr.right){
				if(_count < _length){
					_curr.x_coord = _x_next;
					_curr.y_coord = _y_next;
					_curr.z_coord = _z_next;
					
					if(_curr.below){
						_next = this.getPanel(_curr.below);
						_y_next += 3;
						_x_next += _curr.x_dim;
						_x_next -= _next.x_dim;
						_z_next++;
					} else if(_curr.right){
						_next = this.getPanel(_curr.right);
						_x_next += _curr.x_dim;
						_y_next = 0;
						_z_next++;
					}
					
					_curr = _next;
					_count++;
				} else if(_count > _length){
					_continue = false;
					console.log('Error: Loop count greater than cardList length');
				}
			} else if(!_curr.below && !_curr.right){
				if(_count === _length-1){
					_continue = false;
					_last.x_coord = _x_next;
					_last.y_coord = _y_next;
					_last.z_coord = _z_next;
				} else {
					_continue = false;
					console.log('Error: Loop count less than cardList length');
				}
			}
		}
	}
	
});