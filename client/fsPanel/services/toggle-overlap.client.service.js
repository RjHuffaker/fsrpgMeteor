// Service for handling card overlap
angular.module('freedomsworn').factory('toggleOverlap',
	function($rootScope, CoreVars, PanelUtils, setPanelPosition){
		'ngInject';

		return function(cardList, panelId, nearest){
			
			if(CoreVars.dropdownOpen) return;
			
			if(nearest === 'higher' || nearest === 'lower') return;
			if(CoreVars.cardMoving || CoreVars.cardMoved.length) return;
			
			var _curr = PanelUtils.getPanel(cardList, panelId);
			var _next = PanelUtils.getNext(cardList, panelId);
			
			CoreVars.setCardMoving('overlap');
			
			if(_curr.below){
				PanelUtils.setAdjacent(_curr, _next);
			} else if(_curr.right){
				PanelUtils.setOverlap(_curr, _next);
			}

			setPanelPosition(cardList);
			$rootScope.$digest();
			CoreVars.cardMoved.length = 0;
		};
		
	});