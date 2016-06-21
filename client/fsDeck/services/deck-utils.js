// Deck helper-functions
angular.module('freedomsworn').factory('DeckUtils',
	function($rootScope, PanelUtils, setPanelPosition) {
		'ngInject';

		var service = {};
		
		service.getRefArray = function(cardList){
			var _first = PanelUtils.getFirst(cardList);
			var _index = _first.index;
			var _panel = _first.panel;
			var _refArray = [_index];
			
			if(!_panel){
				console.log(_refArray);
			}
			
			while(_panel.below || _panel.right){
				if(_panel.below){
					_index = PanelUtils.getPanelIndex(cardList, _panel.below);
				} else if(_panel.right){
					_index = PanelUtils.getPanelIndex(cardList, _panel.right);
				}
				
				_refArray.push(_index);
				_panel = cardList[_index];
			}
			
			return _refArray;
		};
		
		service.setCardList = function(cardList){
			for(var i = 0; i < cardList.length; i++){
				var _previous = cardList[i-1] || null;
				var _current = cardList[i];
				var _next = cardList[i+1] || null;
				
				_current.dragging = false;
				_current.locked = false;
				_current.above = null;
				_current.below = null;
				_current.left = null;
				_current.right = null;
				
				if(_previous) _current.left = _previous._id;
				if(_next) _current.right = _next._id;
			}
			
			setPanelPosition(cardList);
			
			$rootScope.$broadcast('cardPanel:onReleaseCard');
		};
		
		service.addToFront = function(deck, newPanel){
			var firstPanel = PanelUtils.getFirst(deck.cardList);
			deck.cardList.push(newPanel);
			deck.deckSize = deck.cardList.length;
			PanelUtils.setAdjacent(newPanel, firstPanel);
			
			setPanelPosition(deck.cardList);
		};
		
		
		service.addToDeck = function(deck, newPanel, previousPanel){
			var prevPanel;
			if(previousPanel){
				prevPanel = previousPanel;
				if(PanelUtils.hasNext(previousPanel)){
					var nextPanel = PanelUtils.getNext(deck.cardList, previousPanel);
					nextPanel.left = newPanel._id;
				}
			} else {
				prevPanel = PanelUtils.getLast(deck.cardList);
			}
			
			newPanel.left = prevPanel._id;
			prevPanel.right = newPanel._id;
			
			deck.cardList.push(newPanel);
			deck.deckSize = deck.cardList.length;
		};
		
		service.removeFromDeck = function(deck, panel){
			var _panel = deck.cardList.indexOf(panel);
			
			var prev = PanelUtils.getPrev(deck.cardList, panel._id);
			var next = PanelUtils.getNext(deck.cardList, panel._id);
			deck.cardList.splice(_panel, 1);
			deck.deckSize = deck.cardList.length;
			PanelUtils.mergeGap(prev, next);
			
			$rootScope.$broadcast('cardPanel:onPressCard');
			setPanelPosition(deck.cardList);
			                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
		};
		
		service.setDeckSize = function(resource){
			var _length = resource.cardList.length - 1;
			resource.deckSize = _length;
			for(var i = 0; i < resource.cardList.length; i++){
				var panel = resource.cardList[i];
				var panelData = PanelUtils.getPanelData(panel);
				panelData.deckSize = _length;
			}
		};
		
		service.getDeckWidth = function(cardList){
			var _lastPanel = PanelUtils.getLast(cardList);
			return _lastPanel.x_coord + _lastPanel.x_dim;
		};
		
		service.setDeckWidth = function(cardList){
			var _deckWidth = service.getDeckWidth(cardList);
			$rootScope.$broadcast('DeckUtils:setDeckWidth', {
				deckWidth: _deckWidth
			});
		};
		
		return service;
	});