angular.module('freedomsworn')
	.directive('cardHeader', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeader.views+'card-header.ng.html'
		};
	})
	.directive('cardHeaderLogo', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeader.views+'card-header-logo.ng.html'
		};
	})
	.directive('cardHeaderItemType', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeader.views+'card-header-item-type.ng.html'
		};
	})
	.directive('cardHeaderAspectType', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeader.views+'card-header-aspect-type.ng.html'
		};
	});