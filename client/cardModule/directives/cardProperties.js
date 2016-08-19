angular.module('freedomsworn')
	.directive('cardProperties', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardModule.views+'card-properties.ng.html',
			link: function(scope, element, attrs){
				scope.isNumber = function(num){
					return !isNaN(parseFloat(num)) && isFinite(num);
				};
			}
		};
	});