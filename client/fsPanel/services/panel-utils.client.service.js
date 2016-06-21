// Panel helper-functions
angular.module('freedomsworn').factory('PanelUtils', 
	function($rootScope, CoreVars){
		'ngInject';

		var service = {};
		
		service.hasAbove = function(panel){
			if(panel.above){
				return true;
			} else {
				return false;
			}
		};
		
		service.hasBelow = function(panel){
			if(panel.below){
				return true;
			} else {
				return false;
			}
		};
		
		service.hasleft = function(panel){
			if(panel.left){
				return true;
			} else {
				return false;
			}
		};
		
		service.hasRight = function(panel){
			if(panel.right){
				return true;
			} else {
				return false;
			}
		};
		
		service.hasPrev = function(panel){
			if(service.hasAbove(panel) || service.hasleft(panel)){
				return true;
			} else {
				return false;
			}
		};
		
		service.hasNext = function(panel){
			if(service.hasBelow(panel) || service.hasRight(panel)){
				return true;
			} else {
				return false;
			}
		};
		
		service.setAdjacent = function(leftPanel, rightPanel){
			leftPanel.below = null;
			leftPanel.right = rightPanel._id;
			rightPanel.above = null;
			rightPanel.left = leftPanel._id;
		};
		
		service.setOverlap = function(abovePanel, belowPanel){
			abovePanel.below = belowPanel._id;
			abovePanel.right = null;
			belowPanel.above = abovePanel._id;
			belowPanel.left = null;
		};
		
		service.getPanel = function(cardList, panelId){
			var _panel = CoreVars.nullPanel;
			for(var i = 0; i < cardList.length; i++){
				if(cardList[i]._id === panelId){
					_panel = cardList[i];
				}
			}
			return _panel;
		};
		
		service.getPanelIndex = function(cardList, panelId){
			var _index = -1;
			for(var i = 0; i < cardList.length; i++){
				if(cardList[i]._id === panelId){
					_index = i;
				}
			}
			return _index;
		};
		
		service.getPrev = function(cardList, panelId){
			var _panel = service.getPanel(cardList, panelId);
			var _prevPanel = CoreVars.nullPanel;
			var _prevIndex = -1;
			if(_panel.above){
				_prevPanel = service.getPanel(cardList, _panel.above);
				_prevIndex = service.getPanelIndex(cardList, _panel.above);
			} else if(_panel.left){
				_prevPanel = service.getPanel(cardList, _panel.left);
				_prevIndex = service.getPanelIndex(cardList, _panel.left);
			}
			return _prevPanel;
		};
		
		service.getNext = function(cardList, panelId){
			var _panel = service.getPanel(cardList, panelId);
			var _nextPanel = CoreVars.nullPanel;
			var _nextIndex = -1;
			if(_panel.below){
				_nextPanel = service.getPanel(cardList, _panel.below);
				_nextIndex = service.getPanelIndex(cardList, _panel.below);
			} else if(_panel.right){
				_nextPanel = service.getPanel(cardList, _panel.right);
				_nextIndex = service.getPanelIndex(cardList, _panel.right);
			}
			return _nextPanel;
		};
		
		service.getFirst = function(cardList){
			var _panel = CoreVars.nullPanel;
			for(var i = 0; i < cardList.length; i++){
				var test = cardList[i];
				if(!service.hasPrev(test)){
					_panel = test;
				}
			}
			return _panel;
		};
		
		service.getLast = function(cardList){
			var _index = 0;
			var _panel = CoreVars.nullPanel;
			for(var i = 0; i < cardList.length; i++){
				var test = cardList[i];
				if(!service.hasNext(test)){
					_panel = test;
				}
			}
			return _panel;  
		};
		
		service.getPanelOrder = function(cardList, panelId){
			var _order = 0;
			var _panel = service.getFirst(cardList);
			
			while(service.hasNext(_panel) && _panel._id !== panelId){
				if(_panel.below){
					_panel = service.getPanel(cardList, _panel.below);
					_order++;
				} else if(_panel.right){
					_panel = service.getPanel(cardList, _panel.right);
					_order++;
				}
			}
			return _order;
		};
		
		// Stack: A group of vertically-overlapping cards
		
		service.getStackStart = function(cardList, panelId){
			var _panel = service.getPanel(cardList, panelId);
			var _count = 0;
			while((_panel.above) && _count < cardList.length){
				_panel = service.getPanel(cardList, _panel.above);
				_count++;
			}
			return _panel;
		};
		
		service.getStackEnd = function(cardList, panelId){
			var _panel = service.getPanel(cardList, panelId);
			var _count = 0;
			while((_panel.below) && _count < cardList.length){
				_panel = service.getPanel(cardList, _panel.below);
				_count++;
			}
			return _panel;
		};
		
		service.getStack = function(cardList, panel, callBack){
			var _panel = service.getStackStart(cardList, panel._id);
			var _panelArray = [ _panel ];
			var _count = 0;
			
			while((_panel.below) && _count < cardList.length){
				_panel = service.getPanel(cardList, _panel.below);
				_panelArray.push(_panel);
			}
			
			if(callBack){
				callBack(_panelArray);
			} else {
				return _panelArray;
			}
		};
		
		service.getPanelData = function(panel){
			switch(panel.panelType){
				case 'Aspect':
					return panel.aspectData;
				case 'Trait':
					return panel.traitData;
				case 'Feat':
					return panel.featData;
				case 'Augment':
					return panel.augmentData;
				case 'Item':
					return panel.itemData;
				case 'Origin':
					return panel.originData;
				default:
					return false;
			}
		};
		
		service.setPanelData = function(panel, cardData){
			switch(panel.panelType){
				case 'Aspect':
					panel.aspectData = cardData;
					break;
				case 'Trait':
					panel.traitData = cardData;
					break;
				case 'Feat':
					panel.featData = cardData;
					break;
				case 'Augment':
					panel.augmentData = cardData;
					break;
				case 'Item':
					panel.itemData = cardData;
					break;
				case 'Origin':
					panel.originData = cardData;
					break;
				default:
					return false;
			}
		};
		
		service.getCardParams = function(panel){
			var cardId;
			switch(panel.panelType){
				case 'Aspect':
					cardId = panel.aspectData._id;
					return { aspectId: panel.aspectData._id };
				case 'Trait':
					cardId = panel.traitData._id;
					return { traitId: panel.traitData._id };
				case 'Feat':
					cardId = panel.featData._id;
					return { featId: panel.featData._id };
				case 'Augment':
					cardId = panel.augmentData._id;
					return { augmentId: panel.augmentData._id };
				case 'Item':
					cardId = panel.itemData._id;
					return { itemId: panel.itemData._id };
				case 'Origin':
					cardId = panel.originData._id;
					return { originId: panel.originData._id };
				default:
					return false;
			}
		};
		
		return service;
	});