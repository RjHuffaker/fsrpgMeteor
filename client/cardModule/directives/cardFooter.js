angular.module('freedomsworn')
	.directive('cardFooter', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardModule.views+'card-footer.ng.html'
		};
	});