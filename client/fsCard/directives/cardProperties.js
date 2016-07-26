angular.module('freedomsworn')
	.directive('cardProperties', function(){
		return {
			restrict: 'A',
			templateUrl: paths.fsCard.views+'card-properties.ng.html'
		};
	});