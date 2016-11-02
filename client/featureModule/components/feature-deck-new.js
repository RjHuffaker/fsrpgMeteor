angular.module('freedomsworn')
	.component('featureDeckNew', {
		templateUrl: '/client/featureModule/components/feature-deck-new.html',
		controllerAs: 'vm',
		controller($scope, $rootScope, $reactive, $meteor, $stateParams, $location) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('featureDecks');

			this.helpers({
				deckList(){
					return FeatureDecks.find({"deckType": { $in: ["Class", "Faction", "Race"] }});
				}
			});

			this.deck = {
				name: 'New Deck',
				type: 'Class',
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
				
				var newDeck = {
					name: name,
					createdOn: new Date(),
					lastModified: new Date(),
					deckSize: size,
					deckType: type,
					dependencies: dependencies,
					cardList: []
				};
				
				newDeck._id = Random.id();
				newDeck.owner = $rootScope.currentUser._id;

				for(var i = 0; i < size; i++){
					newDeck.cardList.push({
						_id: Random.id(),
						deckId: newDeck._id,
						x_dim: 15,
						y_dim: 21,
						name: 'Card '+(i+1),
						cardType: type,
						cardNumber: i+1,
						action1: {},
						action2: {}
					});
				}
				
				newDeck = new deckObject(newDeck);
				
				newDeck.setCardList();
				
				FeatureDecks.insert(newDeck);
				
			};
		}
	});