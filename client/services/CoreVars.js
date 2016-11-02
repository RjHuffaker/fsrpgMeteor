angular.module('freedomsworn')
	.factory('CoreVars',
		function($rootScope){
			'ngInject';

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
				above: null,
				below: null,
				left: null,
				right: null
			};
			
			service.cardMoving = false;
			service.cardMoved = [];
			var moveTimer;
			
			$rootScope.$on('screenSize:onHeightChange', function(event, object){
				service.windowHeight = object.newHeight;
			});
			
			service.setCardMoving = function(direction){
				Meteor.clearTimeout(moveTimer);
				service.cardMoving = true;
				service.cardMoved.push(direction);
				moveTimer = Meteor.setTimeout(function(){
					service.cardMoving = false;
					$rootScope.$broadcast('CoreVars:getDeckWidth');
				}, 500);
			};
			
			service.setCardStop = function(){
				service.cardMoving = false;
				service.cardMoved.length = 0;
			};

			return service;
			
		});