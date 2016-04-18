'use strict';

angular.module('freedomsworn')
	.factory('CoreVars', ['$rootScope',
		function($rootScope){
			
			var service = {};
			
			service.windowHeight = 0;
			
			service.experience = 0;
			service.x_dim_em = 15;
			service.y_dim_em = 21;
			service.x_tab_em = 3;
			service.y_tab_em = 3;
			service.x_cover_em = 12;
			service.y_cover_em = 18;
			
			service.x_dim_px = 240;
			service.y_dim_px = 336;
			service.x_tab_px = 48;
			service.y_tab_px = 48;
			service.x_cover_px = 144;
			service.y_cover_px = 192;
			
			service.nullPanel = {
				_id: null, x_coord: 0, y_coord: 0,
				above: { adjacent: null, overlap: null },
				below: { adjacent: null, overlap: null },
				left: { adjacent: null, overlap: null },
				right: { adjacent: null, overlap: null }
			};
			
			service.cardMoving = false;
			service.cardMoved = [];
			var moveTimer;
			
			$rootScope.$on('screenSize:onHeightChange', function(event, object){
				service.windowHeight = object.newHeight;
			});
			
			service.setCardMoving = function(direction){
				clearTimeout(moveTimer);
				service.cardMoving = true;
				service.cardMoved.push(direction);
				moveTimer = setTimeout(function(){
					service.cardMoving = false;
					$rootScope.$broadcast('CoreVars:getDeckWidth');
				}, 500);
			};
			
			return service;
			
		}]);