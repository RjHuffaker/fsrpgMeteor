angular.module('freedomsworn')
	.directive('featureDeckOptions', function(deckDependencies){
		'ngInject';

		return {
			restrict: 'A',
			templateUrl: paths.featureModule.views+'feature-deck-options.ng.html',
			scope: { deck: '=' },
			link: function(scope, element, attrs){
				
				scope.depList = FeatureDecks.find({"deckType": { $in: ["Class", "Faction", "Race"] }}).fetch();
				
				scope.saveDeck = function(deck){
					deck.save();
				};
				
				scope.toggleDependency = function(deck, deckId){
					deckDependencies.toggleDependency(deck, deckId);
				};
				
			}
		};
	});