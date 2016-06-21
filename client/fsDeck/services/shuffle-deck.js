angular.module('freedomsworn').factory('shuffleDeck',
	function($rootScope, PanelUtils, DeckUtils, setPanelPosition){
		'ngInject';

		return function(cardList){
			var _refArray = DeckUtils.getRefArray(cardList);
			
			_refArray.sort(function() { return 0.5 - Math.random(); });
			
			for(var i = 0; i < _refArray.length; i++){
				var _prev = cardList[_refArray[i - 1]] || null;
				var _curr = cardList[_refArray[i]];
				var _next = cardList[_refArray[i + 1]] || null;
				
				if(_prev){
					var _1d4 = Math.floor(Math.random() * 4 + 1);
					switch(_1d4){
						case 1:
							PanelUtils.setAdjacent(_prev, _curr);
							break;
						case 2:
							PanelUtils.setOverlap(_prev, _curr);
							break;
						case 3:
							PanelUtils.setAdjacent(_prev, _curr);
							break;
						case 4:
							PanelUtils.setOverlap(_prev, _curr);
							break;
					}
					if(!_next){
						_curr.below = null;
						_curr.right = null;
					}
				} else {
					_curr.above = null;
					_curr.below = null;
					_curr.left = null;
					_curr.right = null;
				}
			}
			
			setPanelPosition(cardList);
			
		};
		
	});