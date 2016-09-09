angular.module('freedomsworn')
	.factory('shownColumnsNested', function(){
		
		function name(){
			return {
				content: 'Name',
				shown: true
			};
		};
		
		function aspect(){
			return {
				content: 'Aspect',
				shown: false
			};
		};
		
		function description(){
			return {
				content: 'Description',
				shown: false
			};
		};
		
		function benefit(){
			return {
				content: 'Benefit',
				shown: false,
				nodes: {
					criticalSuccess: {
						content: 'Critical Success',
						shown: false
					}
				}
			}
		};
		
		function coreStatistics(){
			return {
				content: 'Core Statistics',
				shown: false,
				nodes: {
					damage: {
						content: 'Damage',
						shown: false
					},
					baseDurability: {
						content: 'Base Durability',
						shown: false
					},
					defense: {
						content: 'Defense',
						shown: false
					},
					baseMoveSpeed: {
						content: 'Base Move Speed',
						shown: false
					},
					carryingCapacity: {
						content: 'Carrying Capacity',
						shown: false
					}
				}
			};
		};
		
		function modifiers(){
			return {
				content: 'Modifiers',
				shown: false,
				nodes: {
					damage: {
						content: 'Damage',
						shown: false
					},
					durability: {
						content: 'Durability',
						shown: false
					},
					defense: {
						content: 'Defense',
						shown: false
					},
					speed: {
						content: 'speed',
						shown: false
					},
					finesse: {
						content: 'Finesse',
						shown: false
					},
					carryingCapacity: {
						content: 'Carrying Capacity',
						shown: false
					}
				}
			};
		};
		
		function itemProperties(){
			return {
				content: 'Item Properties',
				shown: false,
				nodes: {
					slot: {
						content: 'Slot',
						shown: false
					},
					type: {
						content: 'Type',
						shown: false
					},
					weight: {
						content: 'Weight',
						shown: false
					},
					cost: {
						content: 'Cost',
						shown: false
					}
				}
			};
		};
		
		function defenses(){
			return {
				content: 'Defenses',
				shown: false,
				nodes: {
					block: {
						content: 'Block',
						shown: false
					},
					dodge: {
						content: 'Dodge',
						shown: false
					},
					alertness: {
						content: 'Alertness',
						shown: false
					},
					tenacity: {
						content: 'Tenacity',
						shown: false
					}
				}
			};
		};
		
		function action(num){
			return {
				content: 'Action '+num,
				shown: false,
				nodes: {
					name: {
						content: 'Name',
						shown: false
					},
					target: {
						content: 'Target',
						shown: false
					},
					usage: {
						content: 'Usage',
						shown: false
					},
					frequency: {
						content: 'Frequency',
						shown: false
					},
					count: {
						content: 'Count',
						shown: true
					},
					effect: {
						content: 'Effect',
						shown: false,
						nodes: {
							moveEffect: {
								content: 'Move Effect',
								shown: false
							},
							customEffect: {
								content: 'Custom Effect',
								shown: false
							},
							listItem1: {
								content: 'List Item 1',
								shown: false
							},
							listItem2: {
								content: 'List Item 2',
								shown: false
							},
							listItem3: {
								content: 'List Item 3',
								shown: false
							}
						}
					},
					attackType: {
						content: 'Attack Type',
						shown: false
					},
					attackRoll: {
						content: 'Attack Roll',
						shown: false
					},
					attackSuccess: {
						content: 'Attack Success',
						shown: true,
						nodes: {
							damage: {
								content: 'Damage',
								shown: true
							},
							enableMove: {
								content: 'Enable Move',
								shown: false
							},
							forceMove: {
								content: 'Force Move',
								shown: false
							},
							enableAction: {
								content: 'Enable Action',
								shown: false
							},
							negateInjury: {
								content: 'Negate Injury',
								shown: false
							},
							forceAction: {
								content: 'Force Action',
								shown: true
							},
							attackCurse: {
								content: 'Attack Curse',
								shown: true
							},
							expelCurse: {
								content: 'Expel Curse',
								shown: true
							},
							trapCurse: {
								content: 'Trap Curse',
								shown: true
							}
						}
					},
					attackCriticalSuccess: {
						content: 'Attack Critical Success',
						shown: false
					}
					
				}
			};
		};
		
		
		var service = {
			
			class: {
				name: name(),
				description: description(),
				benefit: benefit(),
				modifiers: modifiers(),
				action1: action(1)
			},
			
			
			race: {
				name: name(),
				description: description(),
				benefit: benefit(),
				coreStatistics: coreStatistics(),
				modifiers: modifiers(),
				action1: action(1)
			},
			
			faction: {
				name: name(),
				description: description(),
				benefit: benefit(),
				action1: action(1)
			},
			
			trait: {
				name: name(),
				aspect: aspect(),
				description: description(),
				benefit: benefit(),
				modifiers: modifiers(),
				defenses: defenses(),
				action1: action(1)
			},
			
			feat: {
				name: name(),
				aspect: aspect(),
				description: description(),
				action1: action(1)
			},
			
			augment: {
				name: name(),
				aspect: aspect(),
				description: description(),
				benefit: benefit(),
				modifiers: modifiers(),
				defenses: defenses(),
				action1: action(1)
			},
			
			item: {
				name: name(),
				description: description(),
				itemProperties: itemProperties(),
				benefit: benefit(),
				modifiers: modifiers(),
				defenses: defenses(),
				action1: action(1),
				action2: action(2)
			}
			
		};
		return service;
	});