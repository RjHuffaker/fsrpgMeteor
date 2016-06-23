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
	.directive('cardHeaderAspect', function(deckDependencies){
		'ngInject';
		return {
			restrict: 'A',
			templateUrl: paths.cardHeader.views+'card-header-aspect.ng.html',
			link: function(scope, element, attrs){
				scope.deckDependencies = deckDependencies;
				
				scope.changeAspect = function(card, aspect){
					if (card.aspect !== aspect){
						card.aspect = aspect;
					}
				};
				
			}
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