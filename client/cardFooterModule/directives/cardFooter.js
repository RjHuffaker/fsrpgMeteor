angular.module('freedomsworn')
	.directive('cardFooter', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardFooterModule.views+'card-footer.ng.html'
		};
	})
	.directive('cardFooterPrerequisites', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardFooterModule.views+'card-footer-prerequisites.ng.html'
		};
	})
	.directive('cardFooterItemSlot', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardFooterModule.views+'card-footer-item-slot.ng.html'
		};
	});