angular.module("freedomsworn")
	.controller("FeatureDeckDetailsCtrl",
		function($scope, $reactive, $meteor, $stateParams, CoreVars, dataSrvc, deckDependencies){
			'ngInject';
			
			$scope.CoreVars = CoreVars;
			
			$scope.dataSrvc = dataSrvc;
			
			$reactive(this).attach($scope);
			
			this.subscribe('featureDecks');
			
			this.helpers({
				featureDeck(){
					var deck = $meteor.object(FeatureDecks, $stateParams.deckId, false);
					if(deck.dependencies) deckDependencies.fetchDependencies(deck);
					return deck;
				}
			});
			
			this.saveDeck = function(deck){
				deck.save();
			};
			
		});