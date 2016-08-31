// Factory-service for providing generic game data
angular.module('freedomsworn')
	.factory('dataSrvc', function(){
		var service = {};
		
		service.sexArray = [
			'---',
			'Male',
			'Female'
		];
		
		service.diceList = [
			{order: 1, name: 'd__', sides: 0, image: 'modules/core/img/d___.png'},
			{order: 2, name: 'd4', sides: 4, image: 'modules/core/img/d_04.png'},
			{order: 3, name: 'd6', sides: 6, image: 'modules/core/img/d_06.png'},
			{order: 4, name: 'd6', sides: 6, image: 'modules/core/img/d_06.png'},
			{order: 5, name: 'd8', sides: 8, image: 'modules/core/img/d_08.png'},
			{order: 6, name: 'd8', sides: 8, image: 'modules/core/img/d_08.png'},
			{order: 7, name: 'd10', sides: 10, image: 'modules/core/img/d_10.png'},
			{order: 8, name: 'd10', sides: 10, image: 'modules/core/img/d_10.png'},
			{order: 9, name: 'd12', sides: 12, image: 'modules/core/img/d_12.png'}
		];
		
		service.targetTypes = [
			'Utility',
			'Close',
			'Close Area',
			'Distant',
			'Distant Area'
		];
		
		service.closeDetails = [
			'1/1', '2/1', '3/1', '4/1',
			'1/2', '2/2', '3/2', '4/2',
			'1/3', '2/3', '3/3', '4/3',
			'1/4', '2/4', '3/4', '4/4'
		];
		
		service.closeAreaDetails = [
			'2x2', '3x3', '4x4', '5x5'
		];
		
		service.distantDetails = [
			'4/1', '6/1', '8/1', '10/1',
			'12/1', '14/1', '16/1', '18/1',
			'20/1', '22/1', '24/1'
		];
		
		service.distantAreaDetails = [
			'8/2x2', '10/2x2', '12/2x2', '16/2x2',
			'10/3x3', '12/3x3', '16/3x3', '20/3x3',
			'12/4x4', '16/4x4', '20/4x4'
		];
		
		service.actionKeywords = [
			'Default',
			'Single-use',
			'Thrown',
			'Reflexive',
			'Melee',
			'Ranged',
			'Evocation',
			'Invocation'
		];
		
		service.actionFrequency = [
			'Free',
			'Count: 1',
			'Count: 2',
			'Count: 3',
			'Count: 4',
			'Count: 5',
			'Disruptive',
			'Responsive'
		];
		
		service.dice = [
			'1d4',
			'1d6',
			'1d8',
			'1d10',
			'1d12'
		];
		
		service.dualDice = [
			'1d4',
			'1d4 or 1d6*',
			'1d6',
			'1d6 or 1d8*',
			'1d8',
			'1d8 or 1d10*',
			'1d10',
			'1d10 or 1d12*',
			'1d12'
		];
		
		service.damageDice = [
			'+1d4 damage',
			'+1d6 damage',
			'+1d8 damage',
			'+1d10 damage',
			'+1d12 damage'
		];
		
		service.abilities = [
			'STR',
			'PHY',
			'FLE',
			'DEX',
			'ACU',
			'INT',
			'WIS',
			'CHA'
		];
		
		service.attackTypes = [
			'Melee',
			'Melee, Reflexive',
			'Ranged',
			'Ranged, Thrown',
			'Evocation',
			'Invocation'
		];
		
		service.defenseTypes = [
			'Block',
			'Dodge',
			'Alertness',
			'Tenacity'
		];
		
		service.prerequisites = [
			'1d10 STR',
			'1d10 PHY',
			'1d10 FLE',
			'1d10 DEX',
			'1d10 ACU',
			'1d10 INT',
			'1d10 WIS',
			'1d10 CHA'
		];
		
		service.itemTypes = [
			'Melee',
			'Melee / Ranged',
			'Melee / Invocation',
			'Ranged',
			'Ranged / Melee',
			'Ranged / Evocation',
			'Evocation',
			'Evocation / Invocation',
			'Evocation / Ranged',
			'Invocation',
			'Invocation / Evocation',
			'Invocation / Melee'
		];
		
		service.itemSlots = [
			'One-handed or Paired*',
			'One-handed',
			'One-handed or Two-handed*',
			'Two-handed',
			'Armor',
			'Shield',
			'Gloves',
			'Boots',
			'Cloak',
			'Amulet',
			'Ring',
			'Belt',
			'Helmet',
			'Consumable',
			'Provision'
		];
		
		service.weaponSlots = [
			'One-handed or Paired*',
			'One-handed',
			'One-handed or Two-handed*',
			'Two-handed'
		];
		
		service.dualItemSlots = [
			'One-handed or Two-handed*',
			'One-handed or Paired*'
		];
		
		service.nonDualItemSlots = [
			'One-handed',
			'Two-handed',
			'Armor',
			'Shield',
			'Gloves',
			'Boots',
			'Cloak',
			'Amulet',
			'Ring',
			'Belt',
			'Helmet',
			'Consumable',
			'Provision'
		];
		
		service.dualItemCount = [
			'Free',
			'Count: 1',
			'Count: 2 or 1*',
			'Count: 2',
			'Count: 3 or 2*',
			'Count: 3',
			'Count: 4 or 3*',
			'Count: 4',
			'Count: 5 or 4*',
			'Count: 5',
			'Responsive',
			'Disruptive'
		];
		
		service.actionCount = [
			'Free',
			'Count: 1',
			'Count: 2',
			'Count: 3',
			'Count: 4',
			'Count: 5',
			'Responsive',
			'Disruptive'
		];
		
		service.dualItemDamage = [
			'+2 damage',
			'+2 or +4* damage',
			'+4 damage',
			'+4 or +6* damage',
			'+6 damage',
			'+6 or +8* damage',
			'+8 damage',
			'+8 or +10* damage',
			'+10 damage',
			'+10 or +12* damage',
			'+12 damage'
		];
		
		service.nonDualItemDamage = [
			'+2 damage',
			'+4 damage',
			'+6 damage',
			'+8 damage',
			'+10 damage',
			'+12 damage'
		];
		
		service.nonItemDamage = [
			'[D]-4 damage',
			'[D]-2 damage',
			'[D] damage',
			'[D]+2 damage',
			'[D]+4 damage',
			'+2 damage',
			'+4 damage',
			'+6 damage',
			'+8 damage',
			'+10 damage',
			'+12 damage',
			'+14 damage',
			'+16 damage'
		];
		
		return service;
	});