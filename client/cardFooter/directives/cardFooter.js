angular.module('freedomsworn')
	.directive('cardFooter', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardFooter.views+'card-footer.ng.html'
		};
	})
	.directive('cardFooterPrerequisites', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardFooter.views+'card-footer-prerequisites.ng.html'
		};
	})
	.directive('cardFooterItemSlot', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardFooter.views+'card-footer-item-slot.ng.html'
		};
	})
	.directive('cardFooterItemWeightCost', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardFooter.views+'card-footer-item-weight-cost.ng.html'
		};
	});