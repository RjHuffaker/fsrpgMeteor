angular.module('freedomsworn')
	.directive('cardHeader', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeaderModule.views+'card-header.ng.html'
		};
	})
	.directive('cardHeaderLogo', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeaderModule.views+'card-header-logo.ng.html'
		};
	})
	.directive('cardHeaderAspect', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeaderModule.views+'card-header-aspect.ng.html'
		};
	})
	.directive('cardHeaderItemType', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeaderModule.views+'card-header-item-type.ng.html'
		};
	})
	.directive('cardHeaderAspectType', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeaderModule.views+'card-header-aspect-type.ng.html'
		};
	});