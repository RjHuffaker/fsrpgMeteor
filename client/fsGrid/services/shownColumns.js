angular.module('freedomsworn')
	.factory('shownColumns', function(){
		var service = {
			
			class: {
				card: {
					'Name': true,
					'Description': false,
					'Benefit': false,
					'Critical Success': false,
					'Modifiers': false,
					'Action 1': false,
					'Action 2': false
				},
				modifiers: {
					'Damage': true,
					'Durability': true,
					'Base Durability': true,
					'Defense': true,
					'Speed': true,
					'Base Speed': true,
					'Finesse': true,
					'Carrying Capacity': true
				},
				actions: [
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					},
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					}
				],
				effectLists: [
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					},
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					}
				]
			},

			faction: {
				card: {
					'Name': true,
					'Description': false,
					'Benefit': false,
					'Critical Success': false,
					'Modifiers': false,
					'Action 1': false,
					'Action 2': false
				},
				modifiers: {
					'Damage': true,
					'Durability': true,
					'Base Durability': true,
					'Defense': true,
					'Speed': true,
					'Base Speed': true,
					'Finesse': true,
					'Carrying Capacity': true
				},
				actions: [
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					},
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					}
				],
				effectLists: [
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					},
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					}
				]
			},

			race: {
				card: {
					'Name': true,
					'Description': false,
					'Benefit': false,
					'Critical Success': false,
					'Modifiers': false,
					'Action 1': false,
					'Action 2': false
				},
				modifiers: {
					'Damage': true,
					'Durability': true,
					'Base Durability': true,
					'Defense': true,
					'Speed': true,
					'Base Speed': true,
					'Finesse': true,
					'Carrying Capacity': true
				},
				actions: [
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					},
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					}
				],
				effectLists: [
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					},
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					}
				]
			},

			trait: {
				card: {
					'Name': true,
					'Aspect': true,
					'Description': false,
					'Benefit': true,
					'Critical Success': false,
					'Modifiers': false,
					'Defenses': false,
					'Action 1': false,
					'Action 2': false,
					'Prerequisites': false
				},
				modifiers: {
					'Damage': true,
					'Durability': true,
					'Defense': true,
					'Finesse': true,
					'Speed': true,
					'Carrying Capacity': true
				},
				defenses: {
					'Block': false,
					'Dodge': false,
					'Alertness': false,
					'Tenacity': false
				},
				effectLists:[
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					},
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					}
				],
				actions: [
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					},
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					}
				],
				effectLists: [
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					},
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					}
				],
				prerequisites: {
					'Attribute': false,
					'Class': false,
					'Faction': false,
					'Race': false
				}	
			},
			
			feat: {
				card: {
					'Name': true,
					'Aspect': true,
					'Description': false,
					'Benefit': false,
					'Action 1': true,
					'Action 2': false,
					'Prerequisites': false
				},
				actions: [
					{
						'Name': true,
						'Target': true,
						'Usage': true,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					},
					{
						'Name': true,
						'Target': true,
						'Usage': true,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					}
				],
				effectLists: [
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					},
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					}
				],
				prerequisites: {
					'Attribute': false,
					'Class': false,
					'Faction': false,
					'Race': false
				}	
			},
			
			augment: {
				card: {
					'Name': true,
					'Aspect': true,
					'Description': false,
					'Benefit': false,
					'Critical Success': false,
					'Modifiers': false,
					'Defenses': false,
					'Action 1': false,
					'Action 2': false,
					'Prerequisites': false
				},
				modifiers: {
					'Damage': true,
					'Durability': true,
					'Defense': true,
					'Finesse': true,
					'Speed': true,
					'Carrying Capacity': true
				},
				defenses: {
					'Block': true,
					'Dodge': false,
					'Alertness': false,
					'Tenacity': false
				},
				actions: [
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					},
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					}
				],
				effectLists: [
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					},
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					}
				],
				prerequisites: {
					'Attribute': false,
					'Class': false,
					'Faction': false,
					'Race': false
				}	
			},
			
			item: {
				card: {
					'Name': true,
					'Description': false,
					'Benefit': false,
					'Critical Success': false,
					'Item Properties': true,
					'Modifiers': false,
					'Defenses': false,
					'Action 1': true,
					'Action 2': false,
					'Action 3': false
				},
				item: {
					'Slot': true,
					'Type': false,
					'Weight': false,
					'Cost': false
				},
				modifiers: {
					'Damage': true,
					'Durability': true,
					'Defense': true,
					'Finesse': true,
					'Speed': true,
					'Carrying Capacity': true
				},
				defenses: {
					'Block': true,
					'Dodge': false,
					'Alertness': false,
					'Tenacity': false
				},
				actions: [
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					},
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					},
					{
						'Name': true,
						'Target': false,
						'Usage': false,
						'Frequency': false,
						'Effect': false,
						'Attack Type': false,
						'Attack Roll': false,
						'Attack Success': false,
						'Attack Critical Success': false
					}
				],
				effectLists:[
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					},
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					},
					{
						'List 1': false,
						'List 2': false,
						'List 3': false
					}
				]
			}
			
		};
		return service;
	});