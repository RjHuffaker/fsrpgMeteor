angular.module("freedomsworn")
	.controller("NewFeatureDeckCtrl",
		function($scope, $reactive, $meteor, $stateParams, $location, featureBread){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('featureDecks');

			this.helpers({
				deckList(){
					return FeatureDecks.find({"deckType": "Aspect"});
				}
			});

			this.deck = {
				name: 'New Deck',
				type: 'Aspect',
				size: 5,
				dependencies: []
			};
			
			this.toggleDependency = function(deckId){
				var deckIndex = this.deck.dependencies.indexOf(deckId);
				
				if (deckIndex > -1) {
					this.deck.dependencies.splice(deckIndex, 1);
				} else {
					this.deck.dependencies.push(deckId);
				}
			};

			this.addNewDeck = function(name, size, type, dependencies){
				featureBread.add(name, size, type, dependencies);
			};

		});