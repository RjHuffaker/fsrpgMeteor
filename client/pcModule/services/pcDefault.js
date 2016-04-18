'use strict';

// Factory-service for managing card-deck, card-slot and card-panel directives.
angular.module('freedomsworn').factory('pcDefault', [
		function(){
			return {
				name: 'George',
				sex: '',
				race: 'Weolda',
				abilities: [
					{ name: 'Strength', order: 0, dice: { name: 'd__', image: 'img/dice/d___.png', sides: '0', order: 0 } },
					{ name: 'Physique', order: 1, dice: { name: 'd__', image: 'img/dice/d___.png', sides: '0', order: 0 } },
					{ name: 'Flexibility', order: 2, dice: { name: 'd__', image: 'img/dice/d___.png', sides: '0', order: 0 } },
					{ name: 'Dexterity', order: 3, dice: { name: 'd__', image: 'img/dice/d___.png', sides: '0', order: 0 } },
					{ name: 'Acuity', order: 4, dice: { name: 'd__', image: 'img/dice/d___.png', sides: '0', order: 0 } },
					{ name: 'Intelligence', order: 5, dice: { name: 'd__', image: 'img/dice/d___.png', sides: '0', order: 0 } },
					{ name: 'Wisdom', order: 6, dice: { name: 'd__', image: 'img/dice/d___.png', sides: '0', order: 0 } },
					{ name: 'Charisma', order: 7, dice: { name: 'd__', image: 'img/dice/d___.png', sides: '0', order: 0 } }
				],
				dicepool: [
					{ name: 'd__', image: 'img/dice/d___.png', sides: '0', order: 0 },
					{ name: 'd4', image: 'img/dice/d_04.png', sides: '4', order: 1 },
					{ name: 'd6', image: 'img/dice/d_06.png', sides: '6', order: 2 },
					{ name: 'd6', image: 'img/dice/d_06.png', sides: '6', order: 3 },
					{ name: 'd8', image: 'img/dice/d_08.png', sides: '8', order: 4 },
					{ name: 'd8', image: 'img/dice/d_08.png', sides: '8', order: 5 },
					{ name: 'd10', image: 'img/dice/d_10.png', sides: '10', order: 6 },
					{ name: 'd10', image: 'img/dice/d_10.png', sides: '10', order: 7 },
					{ name: 'd12', image: 'img/dice/d_12.png', sides: '12', order: 8 }
				],
				block: '2d__',
				dodge: '2d__',
				alertness: '2d__',
				tenacity: '2d__',
				level: 0,
				experience: 0,
				healthLimit: 0,
				healthCurrent: 0,
				injury: 0,
				staminaLimit: 0,
				staminaCurrent: 0,
				fatigue: 0,
				size: 'Medium',
				speed: 6,
				archetype: 'General',
				allegiance: 'Unaligned',
				traitLimit: 0,
				augmentLimit: 0,
				defenseModifier: 0,
				baseDurability: 0,
				totalDurability: 0,
				skills: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				panelType: 'pcSummary',
				deckType: 'pc',
				deckSize: 4,
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
				cardList: [
					{
						_id: 'pc1',
						panelType: 'pc1',
						deckType: 'pc',
						deckSize: 3,
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
							adjacent: 'pc2',
							overlap: null
						},
						x_coord: 0,
						y_coord: 0,
						x_dim: 15,
						y_dim: 21
					},
					{
						_id: 'pc2',
						panelType: 'pc2',
						deckType: 'pc',
						deckSize: 3,
						above: {
							adjacent: null,
							overlap: null
						},
						below: {
							adjacent: null,
							overlap: null
						},
						left: {
							adjacent: 'pc1',
							overlap: null
						},
						right: {
							adjacent: 'pc3',
							overlap: null
						},
						x_coord: 15,
						y_coord: 0,
						x_dim: 15,
						y_dim: 21
					},
					{
						_id: 'pc3',
						panelType: 'pc3',
						deckType: 'pc',
						deckSize: 3,
						above: {
							adjacent: null,
							overlap: null
						},
						below: {
							adjacent: null,
							overlap: null
						},
						left: {
							adjacent: 'pc2',
							overlap: null
						},
						right: {
							adjacent: null,
							overlap: null
						},
						x_coord: 30,
						y_coord: 0,
						x_dim: 15,
						y_dim: 21
					}
				]
			};
			
		}]);