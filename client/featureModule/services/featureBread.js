'use strict';

angular.module('freedomsworn')
	.factory('featureBread', ['$rootScope', '$meteor', '$location', 'CoreVars', 'newFeatureDeck', 'DeckUtils',
		function($rootScope, $meteor, $location, CoreVars, newFeatureDeck, DeckUtils){
			
			var featureDeckList = $meteor.collection(FeatureDecks, true).subscribe('featureDecks');
			
			var service = {
				deck: { cardList: [] },
				newDeck: { 
					panelType: 'featureSummary',
					x_dim: 15,
					y_dim: 21,
					above: {},
					below: {},
					left: {},
					right: {},
					deckType: 'Aspect',
					deckSize: 0,
					cardList: []
				},
				aspects: {}
			};
			
			service.browse = function(){
				service.deck = {
					deckType: 'deckList',
					cardList: []
				};
				service.deck.cardList = featureDeckList;
				service.deck.deckSize = featureDeckList.length;
				DeckUtils.setCardList(service.deck.cardList);
			};
			
			service.read = function(featureDeckId){
				service.deck = $meteor.object(FeatureDecks, featureDeckId, false);
			};
			
			service.edit = function(){
				if(service.deck._id){
					service.deck.save();
				} else if($rootScope.currentUser){
					service.deck.owner = $rootScope.currentUser._id;
					featureDeckList.push(service.deck);
				}
			};
			
			service.add = function(){
				
				service.newDeck._id = new Meteor.Collection.ObjectID().toString();
				service.newDeck.panelType = 'featureSummary';
				service.newDeck.x_dim = 15;
				service.newDeck.y_dim = 21;
				service.newDeck.cardList = [];
				service.newDeck.owner = $rootScope.currentUser._id;
				
				for(var i = 0; i < service.newDeck.deckSize; i++){
					service.newDeck.cardList.push({
						_id: new Meteor.Collection.ObjectID().toString(),
						panelType: 'featureCard',
						x_dim: 15,
						y_dim: 21,
						cardData: {
							name: 'Panel '+i,
							cardType: service.newDeck.deckType,
							entries: []
						}
					});
				}
				
				DeckUtils.setCardList(service.newDeck.cardList);
				
				DeckUtils.addToFront(service.deck, service.newDeck);
				
				service.newDeck = { 
					panelType: 'featureSummary',
					x_dim: 15,
					y_dim: 21,
					above: {},
					below: {},
					left: {},
					right: {},
					deckType: 'Aspect',
					deckSize: 0,
					cardList: []
				};
				
			};
			
			service.delete = function(featureDeck){
				DeckUtils.removeFromDeck(service.deck, featureDeck);
			};
			
			return service;
			
		}]);