angular.module('freedomsworn')
	.directive('stopEvent', function(){
		'ngInject';
		
		return{
			restrict: 'A',
			link: function(scope, element, attrs){
				var _pressEvents = 'touchstart mousedown';
				element.on(_pressEvents, function(event){
					if(!attrs.stopEvent){
						event.stopPropagation();
					}
				});
			}
		};
	});