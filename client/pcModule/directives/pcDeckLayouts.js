angular.module('freedomsworn')
	.directive('pcDeckOptions', function(){
		return {
			restrict: 'A',
			templateUrl: paths.pcModule.views+'pc-deck-options.ng.html'
		};
	})
	.directive('pcSummary', function(){
		return {
			restrict: 'A',
			templateUrl: paths.pcModule.views+'pc-summary.ng.html'
		};
	})
	.directive('pcOptions', function(){
		return {
			restrict: 'A',
			templateUrl: paths.pcModule.views+'pc-options.ng.html'
		};
	})
	.directive('cardPc1', function(){
		return {
			restrict: 'A',
			templateUrl: paths.pcModule.views+'card-pc-1.ng.html'
		};
	})
	.directive('cardPc2', function(){
		return {
			restrict: 'A',
			templateUrl: paths.pcModule.views+'card-pc-2.ng.html'
		};
	})
	.directive('cardPc3', function(){
		return {
			restrict: 'A',
			templateUrl: paths.pcModule.views+'card-pc-3.ng.html'
		};
	});