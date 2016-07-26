angular.module('freedomsworn')
	.directive('cardHeader', function(){
		return {
			restrict: 'A',
			templateUrl: paths.fsCard.views+'card-header.ng.html'
		};
	});