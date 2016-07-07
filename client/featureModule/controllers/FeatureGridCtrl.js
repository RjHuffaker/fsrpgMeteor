angular.module("freedomsworn")
	.controller("FeatureGridCtrl",
		function($scope, $reactive, $meteor, $stateParams, CoreVars, dataSrvc, deckDependencies){
			'ngInject';
			
			$scope.CoreVars = CoreVars;
			
			this.dataSrvc = dataSrvc;
			
			this.deckDependencies = deckDependencies;
			
			$reactive(this).attach($scope);
			
			this.shownColumns = ['Name', 'Aspect', 'Description', 'Action 1'];
			
			this.subscribe('featureDecks');
			
			this.helpers({
				featureDeck(){
					var deck = $meteor.object(FeatureDecks, $stateParams.deckId, false);
					if(deck.dependencies) deckDependencies.fetchDependencies(deck);
					return deck;
				},
				depList(){
					return FeatureDecks.find({"deckType": "Aspect"});
				}
			});
			
			this.saveDeck = function(deck){
				deck.save();
			};
			
			this.toggleDependency = function(deck, deckId){
				deckDependencies.toggleDependency(deck, deckId);
			};
			
			this.changeAspect = function(card, aspect){
				if (card.aspect !== aspect){
					card.aspect = aspect;
				}
			};
			
		});