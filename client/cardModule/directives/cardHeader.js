angular.module('freedomsworn')
	.directive('cardHeader', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardModule.views+'card-header.ng.html'
		};
	});