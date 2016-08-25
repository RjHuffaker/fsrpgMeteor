angular.module('freedomsworn')
	.directive('dependencyModal', function(deckDependencies){
		'ngInject';

		return {
			restrict: 'A',
			templateUrl: paths.featureModule.views+'dependency-modal.ng.html',
			scope: { deck: '=' },
			link: function(scope, element, attrs){
				
				scope.depList = FeatureDecks.find({"deckType": { $in: ["Class", "Faction", "Race"] }}).fetch();
				
				scope.toggleDependency = function(deck, deckId){
					deckDependencies.toggleDependency(deck, deckId);
				};
				
			}
		};
	});