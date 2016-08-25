angular.module('freedomsworn')
	.factory('modalSrvc', function($meteor){
		
		$meteor.subscribe('featureDecks');
		
		var service = {
			current: {
				show: false
			},
			toggleCard: {},
			toggleDeck: {},
			modalDeck: new deckObject({
				name: 'modalDeck',
				_id: Random.id(),
				deckSize: 0,
				cardList: []
			})
		};
		
		service.fetchCards = function(card, deck){
			console.log(card);
			service.toggleCard = card;
			service.toggleDeck = deck;
			
			service.modalDeck.deckType  = 'Choose '+card.cardType;
			service.modalDeck.deckSize = 0;
			service.modalDeck.cardList.length = 0;
			
			var cardType = card.cardType.replace('Choose ', '');
			
			FeatureDecks.find({"deckType": cardType, "_id": { $in: deck.dependencies }})
				.forEach(function(deck){
					for(var i = 0; i < deck.cardList.length; i++){
						var _card = deck.cardList[i];
						service.modalDeck.addToDeck(_card);
					}
					service.modalDeck.setCardList();
					console.log(service.modalDeck);
				});
		};
		
		service.replaceCard = function(card){
			
			service.toggleDeck.replaceCard(service.toggleCard, card);
			
			if(card.cardType === "Trait"){
				if(card.aspect){
					service.toggleDeck.factorFeatureCards();
				}
			}
			service.current = {};
			service.toggleCard = {};
			service.toggleDeck = {};
		};
		
		return service;
		
	});