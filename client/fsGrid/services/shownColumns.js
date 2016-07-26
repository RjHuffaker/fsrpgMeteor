angular.module('freedomsworn')
	.factory('shownColumns', function(){
		var service = {
			card: {
				'Name': true,
				'Aspect': true,
				'Aspect Type': false,
				'Description': false,
				'Benefit': false,
				'Critical Success': false,
				'Item': false,
				'Modifiers': false,
				'Defenses': false,
				'Action 1': false,
				'Action 2': false,
				'Action 3': false,
				'Action 4': false,
				'Prerequisites': false
			},
			item: {
				'Slot': true,
				'Type': false,
				'Weight': false,
				'Cost': false
			},
			modifiers: {
				'Durability': true,
				'Finesse': true,
				'Speed': true
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
					'Effect': false,
					'List 1': false,
					'List 2': false,
					'List 3': false,
					'List 4': false,
					'Attack Type': false,
					'Attack Die #1': false,
					'Attack Die #2': false,
					'Attack Versus': false,
					'Attack Success': false,
					'Attack Critical Success': false
				},
				{
					'Name': true,
					'Target': false,
					'Usage': false,
					'Effect': false,
					'List 1': false,
					'List 2': false,
					'List 3': false,
					'List 4': false,
					'Attack Type': false,
					'Attack Die #1': false,
					'Attack Die #2': false,
					'Attack Versus': false,
					'Attack Success': false,
					'Attack Critical Success': false
				},
				{
					'Name': true,
					'Target': false,
					'Usage': false,
					'Effect': false,
					'List 1': false,
					'List 2': false,
					'List 3': false,
					'List 4': false,
					'Attack Type': false,
					'Attack Die #1': false,
					'Attack Die #2': false,
					'Attack Versus': false,
					'Attack Success': false,
					'Attack Critical Success': false
				},
				{
					'Name': true,
					'Target': false,
					'Usage': false,
					'Effect': false,
					'List 1': false,
					'List 2': false,
					'List 3': false,
					'List 4': false,
					'Attack Type': false,
					'Attack Die #1': false,
					'Attack Die #2': false,
					'Attack Versus': false,
					'Attack Success': false,
					'Attack Critical Success': false
				}
			],
			prerequisites: {
				'Attribute': false,
				'Archetype': false,
				'Allegiance': false,
				'Race': false
			}
		};
		
		return service;
	});