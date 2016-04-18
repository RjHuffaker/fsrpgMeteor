'use strict';

angular.module('freedomsworn').factory('pcBread', ['$rootScope', '$meteor', '$location', 'pcDefault', 'DeckUtils',
	function($rootScope, $meteor, $location, pcDefault, DeckUtils){
		
		var pcDeckList = $meteor.collection(PcDecks, true).subscribe('pcDecks');
		
		var service = {
			deck: {}
		};
		
		service.browse = function(){
			service.deck.cardList = pcDeckList;
			service.deck.deckSize = pcDeckList.length;
			DeckUtils.setCardList(service.deck.cardList);
		};
		
		service.read = function(pcDeckId){
			if(pcDeckId === 'new'){
				service.deck = pcDefault;
			} else {
				service.deck = $meteor.object(PcDecks, pcDeckId, false);
			}
		};
		
		service.edit = function(){
			if(service.deck._id){
				service.deck.save();
			} else if($rootScope.currentUser){
				service.deck.owner = $rootScope.currentUser._id;
				pcDeckList.push(service.deck);
			}
		};
		
		service.add = function(){
			service.deck = pcDefault;
		};
		
		service.delete = function(pcDeck){
			pcDeckList.splice(pcDeckList.indexOf(pcDeck), 1);
			service.deck.deckSize = pcDeckList.length;
		};
		
		return service;
		
	}]);