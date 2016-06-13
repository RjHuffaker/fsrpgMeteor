'use strict';

angular.module('freedomsworn').factory('pcBread', ['$rootScope', '$meteor', '$location', 'pcDefault', 'DeckUtils',
	function($rootScope, $meteor, $location, pcDefault, DeckUtils){
		
		var service = {};
		
		service.browse = function(){
			return PcDecks.find({});
		};
		
		service.read = function(deckId){
			if(deckId === 'new'){
				return pcDefault;
			} else {
				return $meteor.object(PcDecks, deckId, false);
			}
		};
		
		service.edit = function(deck){
			if(deck._id){
				deck.save();
			} else if($rootScope.currentUser){
				deck.owner = $rootScope.currentUser._id;
				PcDecks.insert(deck);
			} else {
				console.log('Error: Not Logged In');
			}
		};
		
		service.add = function(){
			var newDeck = pcDefault;
			
			newDeck._id = new Meteor.Collection.ObjectID().toString();
			newDeck.owner = $rootScope.currentUser._id;
			
			DeckUtils.setCardList(newDeck.cardList);
			PcDecks.insert(newDeck);
			
			console.log(newDeck);
			
			$location.path('/pcDecks/'+newDeck._id);
			
		};
		
		service.delete = function(deckId){
			PcDecks.remove(deckId);
		};
		
		return service;
		
	}]);