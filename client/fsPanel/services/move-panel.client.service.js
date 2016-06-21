// Service to resolve panel movement
angular.module('freedomsworn').factory('movePanel',
	function($rootScope, CoreVars, PanelUtils, setPanelPosition){
		'ngInject';

		return function(cardList, slot, panel, nearest, moveX, moveY){
			
			if(CoreVars.cardMoving) return;
			
			if(slot._id === panel._id) return;
			
			var slotStart = PanelUtils.getStackStart(cardList, slot._id),
				slotEnd = PanelUtils.getStackEnd(cardList, slot._id),
				slotStartPrev = PanelUtils.getPrev(cardList, slotStart._id),
				slotEndNext = PanelUtils.getNext(cardList, slotEnd._id),
				panelStart = PanelUtils.getStackStart(cardList, panel._id),
				panelEnd = PanelUtils.getStackEnd(cardList, panel._id),
				panelStartPrev = PanelUtils.getPrev(cardList, panelStart._id),
				panelEndNext = PanelUtils.getNext(cardList, panelEnd._id);
			
			var panelStartOrder = PanelUtils.getPanelOrder(cardList, panelStart._id),
				slotStartOrder = PanelUtils.getPanelOrder(cardList, slotStart._id);
			
			if(panelStartOrder < slotStartOrder){
				// console.log('Panel moving right ---->');
				if(CoreVars.cardMoved.indexOf('above') > -1) return;
				if(CoreVars.cardMoved.indexOf('below') > -1) return;
				
				CoreVars.setCardMoving('right');
				
				PanelUtils.setAdjacent(slotEnd, panelStart);
				PanelUtils.setAdjacent(panelEnd, slotEndNext);
				PanelUtils.setAdjacent(panelStartPrev, panelEndNext);
				
			} else if(slotStartOrder < panelStartOrder){
				// console.log('Panel moving left <----');
				if(CoreVars.cardMoved.indexOf('above') > -1) return;
				if(CoreVars.cardMoved.indexOf('below') > -1) return;
				
				CoreVars.setCardMoving('left');
				
				PanelUtils.setAdjacent(slotStartPrev, panelStart);
				PanelUtils.setAdjacent(panelEnd, slotStart);
				PanelUtils.setAdjacent(panelStartPrev, panelEndNext);
				
			}

			setPanelPosition(cardList);
			
		};
		
	});