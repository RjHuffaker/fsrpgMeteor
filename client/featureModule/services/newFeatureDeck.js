angular.module('freedomsworn')
	.factory('newFeatureDeck', function(){
		return {
			name: 'Feature Deck',
			panelType: 'featureSummary',
			deckType: 'Class',
			deckSize: 8,
			above: null,
			below: null,
			left: null,
			right: null,
			x_coord: 0,
			y_coord: 0,
			x_dim: 15,
			y_dim: 21,
			cardList: []
		};
		
	});