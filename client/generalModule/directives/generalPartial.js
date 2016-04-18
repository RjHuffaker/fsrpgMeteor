angular.module('freedomsworn')
	.directive('cardModifiers', function(){
		return {
			restrict: 'A',
			templateUrl: paths.generalModule.views+'card-modifiers.ng.html'
		};
	});