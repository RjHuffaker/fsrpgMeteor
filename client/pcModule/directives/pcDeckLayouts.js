angular.module('freedomsworn')
	.directive('cardPc1', function(){
		'ngInject';

		return {
			restrict: 'A',
			scope: { card: '=cardPc1', deck: '=' },
			templateUrl: paths.pcModule.views+'card-pc-1.ng.html'
		};
	})
	.directive('cardPc2', function(){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: { card: '=cardPc2', deck: '=' },
			templateUrl: paths.pcModule.views+'card-pc-2.ng.html'
		};
	})
	.directive('cardPc3', function(){
		return {
			restrict: 'A',
			scope: { card: '=cardPc3', deck: '=' },
			templateUrl: paths.pcModule.views+'card-pc-3.ng.html'
		};
	})
	.directive('cardPc4', function($meteor){
		return {
			restrict: 'A',
			scope: { card: '=cardPc4', deck: '=' },
			templateUrl: paths.pcModule.views+'card-pc-4.ng.html',
			link: function(scope, element, attrs){
				
				$meteor.subscribe('featureDecks');
				
				scope.addItem = function(){
					
				};
				
				fetchCards = function(card, deck){
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
				
			}
		};
	});