angular.module('freedomsworn')
	.directive('stopEvent', ['CoreVars', function(CoreVars){
		return{
			restrict: 'A',
			link: function(scope, element, attrs){
				var _pressEvents = 'touchstart mousedown';
				element.on(_pressEvents, function(event){
					if(!scope.panel.left.overlap && !scope.panel.below.overlap){
						event.stopPropagation();
					}
				});
				
				scope.$watch(function(){ return element.hasClass('open'); }, function(newVal, oldVal){
					CoreVars.dropdownOpen = newVal;
				});
				
			}
		};
	}]);