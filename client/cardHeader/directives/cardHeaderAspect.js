angular.module('freedomsworn')
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
	});