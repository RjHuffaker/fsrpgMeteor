// Gateway to move-panel function
angular.module('freedomsworn').factory('onCardMove',
	function(CoreVars, checkEdge, movePanel){
		'ngInject'

		return function(cardList, object){
			
			if(CoreVars.cardMoving) return;
			
			var slot = object.slot;
			var slot_x = slot.x_coord + slot.x_dim;
			var slot_y = slot.y_coord + slot.y_dim;
			
			var panel = object.panel;
			var panel_x = panel.x_coord + panel.x_dim;
			var panel_y = panel.y_coord + panel.y_dim;
			
			var changeX = Math.abs(panel_x - slot_x);
			var changeY = Math.abs(panel_y - slot_y);
			
			var crossingResult = checkEdge.crossing(slot, object.offset.left, object.offset.top, object.mouseX, object.mouseY, object.emPx);
			
			if(crossingResult && (changeX !== 0 || changeY !== 0)){
				movePanel(cardList, slot, panel, crossingResult, object.moveX, object.moveY);
			}
		};
	});