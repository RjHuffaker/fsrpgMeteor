'use strict';

angular.module('freedomsworn')
	.factory('modalSrvc', [
		function(){
			
			var service = {};
			
			service.current = {
				show: false
			};
			
			return service;
			
		}]);