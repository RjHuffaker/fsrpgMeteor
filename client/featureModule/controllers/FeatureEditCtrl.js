angular.module("freedomsworn")
	.controller("FeatureEditCtrl",
		function($scope, $reactive, $meteor, $stateParams, featureBread, CoreVars, dataSrvc, shownColumns, deckDependencies){
			'ngInject';
			
			$scope.CoreVars = CoreVars;
			
			this.dataSrvc = dataSrvc;
			
			this.shownColumns = shownColumns;
			
			this.deckDependencies = deckDependencies;
			
			$reactive(this).attach($scope);
			
			this.shownColumns = {
				card: ['Name'],
				item: ['Slot'],
				modifiers: ['Durability', 'Finesse', 'Speed'],
				defenses: ['Block', 'Dodge', 'Alertness', 'Tenacity'],
				actions: [ ['Name'], ['Name'], ['Name'], ['Name'] ]
			};
			
			this.subscribe('featureDecks');
			
			this.helpers({
				featureDeck(){
					var deck = featureBread.read($stateParams.deckId);
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