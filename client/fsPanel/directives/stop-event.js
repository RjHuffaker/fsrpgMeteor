angular.module('freedomsworn')
	.directive('stopEvent', function(CoreVars){
		'ngInject';
		
		return{
			restrict: 'A',
			link: function(scope, element, attrs){
				var _pressEvents = 'touchstart mousedown';
				element.on(_pressEvents, function(event){
					if(!scope.panel.below){
						event.stopPropagation();
					}
				});
				
				scope.$watch(function(){ return element.hasClass('open'); }, function(newVal, oldVal){
					CoreVars.dropdownOpen = newVal;
				});
				
			}
		};
	});