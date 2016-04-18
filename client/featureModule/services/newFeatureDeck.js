'use strict';

angular.module('freedomsworn')
	.factory('newFeatureDeck', [
		function(){
			return {
				name: 'Feature Deck',
				panelType: 'featureSummary',
				deckType: 'Aspect',
				deckSize: 8,
				above: {
					adjacent: null,
					overlap: null
				},
				below: {
					adjacent: null,
					overlap: null
				},
				left: {
					adjacent: null,
					overlap: null
				},
				right: {
					adjacent: null,
					overlap: null
				},
				x_coord: 0,
				y_coord: 0,
				x_dim: 15,
				y_dim: 21,
				cardList: []
			};
			
		}]);