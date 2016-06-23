angular.module('freedomsworn')
	.factory('featureBread',
		function($rootScope, $meteor, $location, $timeout, CoreVars, newFeatureDeck, DeckUtils){
			'ngInject';
			
			
			var service = {};
			
			service.browse = function(){
				return FeatureDecks.find({});
			};
			
			service.read = function(featureDeckId){
				return $meteor.object(FeatureDecks, featureDeckId, false);
			};
			
			service.edit = function(deck){
				if(deck._id){
					deck.save();
				} else if($rootScope.currentUser){
					deck.owner = $rootScope.currentUser._id;
					FeatureDecks.insert(deck);
				} else {
					console.log('Error: Not Logged In');
				}
			};
			
			service.add = function(name, size, type, dependencies){
				
				var newDeck = {
					name: name,
					deckSize: size,
					deckType: type,
					dependencies: dependencies,
					cardList: []
				};
				
				newDeck._id = Random.id();
				newDeck.owner = $rootScope.currentUser._id;

				for(var i = 0; i < size; i++){
					newDeck.cardList.push({
						_id: 'Panel '+(i+1),
						deckId: newDeck._id,
						panelType: 'featureCard',
						x_dim: 15,
						y_dim: 21,
						cardData: {
							name: 'Panel '+i,
							cardType: type,
							actions: []
						}
					});
				}
				
				DeckUtils.setCardList(newDeck.cardList);
				
				FeatureDecks.insert(newDeck, function(error, result){
					if(error){
						console.log(error);
					} else if(result){
						$timeout(function(){
							$location.path('/featureDecks/'+result);
						}, 0);
					}
				});
				
			};
			
			service.deleteDeck = function(deck){
				FeatureDecks.remove(deck._id);
			};
			
			return service;
			
		});