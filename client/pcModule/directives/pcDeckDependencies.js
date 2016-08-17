angular.module('freedomsworn')
	.directive('pcDeckDependencies', function(deckDependencies){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: { deck: '=' },
			templateUrl: paths.pcModule.views+'pc-deck-dependencies.ng.html',
			link: function(scope, element, attrs){
				
				scope.depList = FeatureDecks.find({}).fetch();
				
				scope.toggleDependency = function(deck, deckId){
					deckDependencies.toggleDependency(deck, deckId);
				};
				
				scope.fetchDependencies = function(deck){
					deckDependencies.fetchDependencies(deck);
				};
				
			}
		};
	})