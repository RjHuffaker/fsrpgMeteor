angular.module('freedomsworn')
	.factory('newFeatureDeck', function(){
		return {
			name: 'Feature Deck',
			deckType: 'Class',
			deckSize: 8,
			cardList: []
		};
		
	});