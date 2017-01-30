angular.module('freedomsworn')
	.component('featureDeckNew', {
		templateUrl: '/client/featureModule/components/feature-deck-new.html',
		controllerAs: 'vm',
		controller($scope, $element, $rootScope, $reactive, $meteor, $stateParams, $location, $timeout, modalSrvc) {
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

			this.addNewItem = function(newDeck){
				
				newDeck.createdOn = new Date();
				newDeck.lastModified = new Date();
				newDeck.cardList = [];
				newDeck._id = Random.id();
				newDeck.owner = $rootScope.currentUser._id;

				for(var i = 0; i < newDeck.size; i++){
					newDeck.cardList.push({
						_id: Random.id(),
						deckId: newDeck._id,
						x_dim: 15,
						y_dim: 21,
						name: 'Card '+(i+1),
						cardType: newDeck.deckType,
						cardNumber: i+1,
						action1: {},
						action2: {}
					});
				}
				
				newDeck = new deckObject(newDeck);
				
				newDeck.setCardList();
				
				FeatureDecks.insert(newDeck, function(error, result){
          if(error){
            console.log(error);
          } else if(result) {
            console.log(result);
            $timeout(function(){
              $location.path('/featureDeckEdit/'+result);
            }, 0);
          }
        });
				
				console.log($element);
				
				modalSrvc.current = {};
				
			};
			
			this.cancel = function(){
				modalSrvc.current = {};
			};
			
		}
	});