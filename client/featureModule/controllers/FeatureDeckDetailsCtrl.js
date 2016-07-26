angular.module("freedomsworn")
	.controller("FeatureDeckDetailsCtrl",
		function($scope, $reactive, $meteor, $stateParams, featureBread, CoreVars, dataSrvc, deckDependencies, shuffleDeck){
			'ngInject';
			
			$scope.CoreVars = CoreVars;
			
			$scope.dataSrvc = dataSrvc;
			
			$reactive(this).attach($scope);
			
			this.subscribe('featureDecks');
			
			this.helpers({
				featureDeck(){
					var deck = featureBread.read($stateParams.deckId);
					if(deck.dependencies) deckDependencies.fetchDependencies(deck);
					return deck;
				}
			});
			
			this.saveDeck = function(deck){
				deck.save();
			};
			
		});