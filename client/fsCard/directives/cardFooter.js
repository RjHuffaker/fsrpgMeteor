angular.module('freedomsworn')
	.directive('cardFooter', function(){
		return {
			restrict: 'A',
			templateUrl: paths.fsCard.views+'card-footer.ng.html'
		};
	});