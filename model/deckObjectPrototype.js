deckObject = function (doc) {
	_.extend(this, doc);
};

_.extend(deckObject.prototype, {
	
	cardMoved: [],
	
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
		this.mergeGap(_prev, _next);
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
	},
	
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
	
	getDeckWidth: function(){
		var _lastPanel = this.getLast();
		return _lastPanel.x_coord + _lastPanel.x_dim;
	},
	
	mergeGap: function(panel_a, panel_b){
		if(panel_a.right || panel_b.left){
			panel_a.below = null;
			panel_a.right = panel_b._id;
			panel_b.above = null;
			panel_b.left = panel_a._id;
		} else if(panel_a.below || panel_b.above){
			panel_a.below = panel_b._id;
			panel_a.right = null;
			panel_b.above = panel_a._id;
			panel_b.left = null;
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
	
	getPanel: function(panelId){
		var _panel = {
			_id: null, x_coord: 0, y_coord: 0,
			above: null, below: null,
			left: null, right: null
		};
		for(var i = 0; i < this.cardList.length; i++){
			if(this.cardList[i]._id === panelId){
				_panel = this.cardList[i];
			}
		}
		return _panel;
	},
	
	getPanelIndex: function(panelId){
		var _index = -1;
		for(var i = 0; i < this.cardList.length; i++){
			if(this.cardList[i]._id === panelId){
				_index = i;
			}
		}
		return _index;
	},
	
	getPrev: function(panelId){
		var _panel = this.getPanel(panelId);
		var _prevPanel = {
			_id: null, x_coord: 0, y_coord: 0, cardNumber: 0,
			above: null, below: null,
			left: null, right: null
		};
		if(_panel.above){
			_prevPanel = this.getPanel(_panel.above);
		} else if(_panel.left){
			_prevPanel = this.getPanel(_panel.left);
		}
		return _prevPanel;
	},
	
	getNext: function(panelId){
		var _panel = this.getPanel(panelId);
		var _nextPanel = {
			_id: null, x_coord: 0, y_coord: 0, cardNumber: 0,
			above: null, below: null,
			left: null, right: null
		};
		if(_panel.below){
			_nextPanel = this.getPanel(_panel.below);
		} else if(_panel.right){
			_nextPanel = this.getPanel(_panel.right);
		}
		return _nextPanel;
	},
	
	getFirst: function(){
		var _panel = {
			_id: null, x_coord: 0, y_coord: 0,
			above: null, below: null,
			left: null, right: null
		};
		for(var i = 0; i < this.cardList.length; i++){
			var test = this.cardList[i];
			if(!test.above && !test.left){
				_panel = test;
			}
		}
		return _panel;
	},
	
	getLast: function(){
		var _index = 0;
		var _panel = {
			_id: null, x_coord: 0, y_coord: 0,
			above: null, below: null,
			left: null, right: null
		};
		for(var i = 0; i < this.cardList.length; i++){
			var test = this.cardList[i];
			if(!test.below && !test.right){
				_panel = test;
			}
		}
		return _panel;  
	},
	
	getPanelOrder: function(panelId){
		var _order = 0;
		var _panel = this.getFirst();
		
		while((_panel.below || _panel.right) && _panel._id !== panelId){
			if(_panel.below){
				_panel = this.getPanel(_panel.below);
				_order++;
			} else if(_panel.right){
				_panel = this.getPanel(_panel.right);
				_order++;
			}
		}
		return _order;
	},
	
	getStackStart: function(panelId){
		var _panel = this.getPanel(panelId);
		var _count = 0;
		while((_panel.above) && _count < this.cardList.length){
			_panel = this.getPanel(_panel.above);
			_count++;
		}
		return _panel;
	},
	
	getStackEnd: function(panelId){
		var _panel = this.getPanel(panelId);
		var _count = 0;
		while((_panel.below) && _count < this.cardList.length){
			_panel = this.getPanel(_panel.below);
			_count++;
		}
		return _panel;
	},
	
	getStack: function(panel, callBack){
		var _panel = this.getStackStart(panel._id);
		var _panelArray = [ _panel ];
		var _count = 0;
		
		while((_panel.below) && _count < this.cardList.length){
			_panel = this.getPanel(_panel.below);
			_panelArray.push(_panel);
		}
		
		if(callBack){
			callBack(_panelArray);
		} else {
			return _panelArray;
		}
	},
	
	setCardMoving: function(direction){
		clearTimeout(this.moveTimer);
		this.cardMoving = true;
		this.cardMoved.push(direction);
		this.moveTimer = setTimeout(function(){
			this.cardMoving = false;
			clearTimeout(this.moveTimer);
		}, 500);
	},
	
	setCardStop: function(){
		this.cardMoving = false;
		this.cardMoved.length = 0;
	},
	
	toggleOverlap: function(panelId){
		
		if(this.dropdownOpen) return;
		
		if(this.cardMoving || this.cardMoved.length) return;
		
		var _curr = this.getPanel(panelId);
		var _next = this.getNext(panelId);
		
		this.setCardMoving('overlap');
		
		if(_curr.below){
			this.setAdjacent(_curr, _next);
		} else if(_curr.right){
			this.setOverlap(_curr, _next);
		}

		this.setPanelPosition();
		
		this.cardMoved.length = 0;
	},
	
	movePanel: function(slot, panel){
		
		if(this.cardMoving) return;
		
		if(slot._id === panel._id) return;
		
		var slotStart = this.getStackStart(slot._id),
			slotEnd = this.getStackEnd(slot._id),
			slotStartPrev = this.getPrev(slotStart._id),
			slotEndNext = this.getNext(slotEnd._id),
			panelStart = this.getStackStart(panel._id),
			panelEnd = this.getStackEnd(panel._id),
			panelStartPrev = this.getPrev(panelStart._id),
			panelEndNext = this.getNext(panelEnd._id);
		
		var panelStartOrder = this.getPanelOrder(panelStart._id),
			slotStartOrder = this.getPanelOrder(slotStart._id);
		
		if(panelStartOrder < slotStartOrder){
			// console.log('Panel moving right ---->');
			if(this.cardMoved.indexOf('above') > -1) return;
			if(this.cardMoved.indexOf('below') > -1) return;
			
			this.setCardMoving('right');
			
			this.setAdjacent(slotEnd, panelStart);
			this.setAdjacent(panelEnd, slotEndNext);
			this.setAdjacent(panelStartPrev, panelEndNext);
			
		} else if(slotStartOrder < panelStartOrder){
			// console.log('Panel moving left <----');
			if(this.cardMoved.indexOf('above') > -1) return;
			if(this.cardMoved.indexOf('below') > -1) return;
			
			this.setCardMoving('left');
			
			this.setAdjacent(slotStartPrev, panelStart);
			this.setAdjacent(panelEnd, slotStart);
			this.setAdjacent(panelStartPrev, panelEndNext);
			
		}

		this.setPanelPosition();
		
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
	},
	
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
			
			console.log(_index+' / '+refArray[i]+' / '+_order);
			
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