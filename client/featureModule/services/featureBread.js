'use strict';

angular.module('freedomsworn')
	.factory('featureBread', ['$rootScope', '$meteor', '$location', 'CoreVars', 'newFeatureDeck', 'DeckUtils',
		function($rootScope, $meteor, $location, CoreVars, newFeatureDeck, DeckUtils){
			
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
			
			service.add = function(name, size, type){
				
				var newDeck = {
					name: name,
					deckSize: size,
					cardList: []
				};
				
				for(var i = 0; i < size; i++){
					newDeck.cardList.push({
						_id: new Meteor.Collection.ObjectID().toString(),
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
				
				newDeck._id = new Meteor.Collection.ObjectID().toString();
				newDeck.owner = $rootScope.currentUser._id;
				
				DeckUtils.setCardList(newDeck.cardList);
				
				FeatureDecks.insert(newDeck);
				
				$location.path('/featureDecks/'+newDeck._id);
				
			};
			
			service.deleteDeck = function(deck){
				FeatureDecks.remove(deck._id);
			};
			
			return service;
			
		}]);