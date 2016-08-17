angular.module('freedomsworn')
	.directive('cardProperties', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardModule.views+'card-properties.ng.html'
		};
	});