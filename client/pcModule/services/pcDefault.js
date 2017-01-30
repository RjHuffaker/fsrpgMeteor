angular.module('freedomsworn')
	.factory('pcDefault', function(){
		return {
			name: 'Randolph',
			createdOn: new Date(),
			lastModified: new Date(),
			sex: '',
			race: { name: 'Weolda', baseDurability: 4, speed: 3},
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
			speed: 3,
			class: [{name: 'General'}],
			faction: [{name: 'Unaligned'}],
			traitLimit: 0,
			augmentLimit: 0,
			defenseModifier: 0,
			baseDurability: 0,
			totalDurability: 0,
			skills: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			skillPoints: 0,
			skillMax: 0,
			deckType: 'pcDeck',
			deckSize: 4,
			x_margin: 3,
			y_margin: 3,
			dependencies: [
				'j3WBTRgCDuA2kHJ7p',
				'ACcgpNSvQnfpdXogi',
				'4fR2Wbgou5WEKJv47',
				'RJuhMum5v9r6v5N5w',
				'up7kQPiv29f4Dvc59',
				'TFb6brdQzr8pJBmRk',
				'mkWocd8FSeQv3a2Et',
				'SN7RMi6Rqn2zJqS9B'
			],
			cardList: [
				{
					_id: Random.id(),
					cardType: 'pc1',
					x_dim: 15,
					y_dim: 21
				},
				{
					_id: Random.id(),
					cardType: 'pc2',
					x_dim: 15,
					y_dim: 21
				},
				{
					_id: Random.id(),
					cardType: 'pc3',
					x_dim: 15,
					y_dim: 21
				},
				{
					_id: Random.id(),
					cardType: 'pc4',
					x_dim: 15,
					y_dim: 21
				},
				{
					_id: Random.id(),
					cardType: 'Choose Trait',
					cardLevel: 0,
					x_dim: 15,
					y_dim: 21
				}
			]
		};
			
	});