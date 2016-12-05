deckGetters = function (doc) {
	_.extend(this, doc);
};

_.extend(deckGetters.prototype, {
	
	getDeckWidth: function(){
		var _lastPanel = this.getLast();
		return _lastPanel.x_coord + _lastPanel.x_dim;
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
	
});