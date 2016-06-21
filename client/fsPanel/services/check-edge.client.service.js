// Service to calculate card edges
angular.module('freedomsworn').factory('checkEdge',
	function(PanelUtils){
		'ngInject';

		var service = {};
		
		service.crossing = function(panel, panelX, panelY, mouseX, mouseY, emPx){
			var _cover_px = 3 * emPx,
				_x_dim_px = panel.x_dim * emPx,
				_y_dim_px = panel.y_dim * emPx,
				_aboveEdge = panelY,
				_rightEdge = panelX + _x_dim_px,
				_belowEdge = panelY + _y_dim_px,
				_leftEdge = panelX;
			
			if(mouseX >= _leftEdge && mouseX <= _rightEdge){
				
				var _left = mouseX - _leftEdge,
				_right = _rightEdge - mouseX;
				
				if(_left < _right){
					return 'left';
				} else {
					return 'right';
				}
				
			} else {
				return false;
			}
			
		};
		
		return service;
		
	});