angular.module('freedomsworn')
	.factory('shownColumns', function(){
		
		function name(){
			return {
				content: 'Name',
				width: 100,
				shown: true
			};
		};
		
		function aspect(){
			return {
				content: 'Aspect',
				width: 100,
				shown: false
			};
		};
		
		function description(){
			return {
				content: 'Description',
				width: 100,
				shown: false
			};
		};
		
		function benefit(){
			return {
				content: 'Benefit',
				width: 100,
				shown: false,
				nodes: {
					criticalSuccess: {
						content: 'Critical Success',
						width: 100,
						shown: false
					}
				}
			}
		};
		
		function statistic(){
			return {
				content: 'Core Statistics',
				shown: false,
				nodes: {
					baseDurability: {
						content: 'Base Durability',
						width: 100,
						shown: false
					},
					baseMoveSpeed: {
						content: 'Base Move Speed',
						width: 100,
						shown: false
					}
				}
			};
		};
		
		function modifier(){
			return {
				content: 'Modifiers',
				shown: false,
				nodes: {
					damageModifier: {
						content: 'Damage',
						width: 100,
						shown: false
					},
					durabilityModifier: {
						content: 'Durability',
						width: 100,
						shown: false
					},
					defenseModifier: {
						content: 'Defense',
						width: 100,
						shown: false
					},
					moveSpeedModifier: {
						content: 'Move Speed',
						width: 100,
						shown: false
					},
					finesseModifier: {
						content: 'Finesse',
						width: 100,
						shown: false
					},
					carryingCapacityModifier: {
						content: 'Carrying Capacity',
						width: 100,
						shown: false
					}
				}
			};
		};
		
		function item(){
			return {
				content: 'Item Properties',
				shown: false,
				nodes: {
					slot: {
						content: 'Slot',
						width: 100,
						shown: false
					},
					type: {
						content: 'Type',
						width: 100,
						shown: false
					},
					weight: {
						content: 'Weight',
						width: 100,
						shown: false
					},
					cost: {
						content: 'Cost',
						width: 100,
						shown: false
					}
				}
			};
		};
		
		function defense(){
			return {
				content: 'Defenses',
				shown: false,
				nodes: {
					block: {
						content: 'Block',
						width: 100,
						shown: false
					},
					dodge: {
						content: 'Dodge',
						width: 100,
						shown: false
					},
					alertness: {
						content: 'Alertness',
						width: 100,
						shown: false
					},
					tenacity: {
						content: 'Tenacity',
						width: 100,
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
						width: 200,
						shown: false
					},
					target: {
						content: 'Target',
						width: 200,
						shown: false
					},
					usage: {
						content: 'Usage',
						width: 200,
						shown: false
					},
					frequency: {
						content: 'Frequency',
						width: 200,
						shown: false
					},
					count: {
						content: 'Count',
						width: 200,
						shown: true
					},
					effect: {
						content: 'Effect',
						width: 200,
						shown: false,
						nodes: {
							moveEffect: {
								content: 'Move Effect',
								width: 100,
								shown: false
							},
							customEffect: {
								content: 'Custom Effect',
								width: 100,
								shown: false
							},
							listItem1: {
								content: 'List Item 1',
								width: 100,
								shown: false
							},
							listItem2: {
								content: 'List Item 2',
								width: 100,
								shown: false
							},
							listItem3: {
								content: 'List Item 3',
								width: 100,
								shown: false
							}
						}
					},
					attackType: {
						content: 'Attack Type',
						width: 100,
						shown: false
					},
					attackRoll: {
						content: 'Attack Roll',
						width: 100,
						shown: false
					},
					attackSuccess: {
						content: 'Attack Success',
						width: 100,
						shown: true,
						nodes: {
							damage: {
								content: 'Damage',
								width: 100,
								shown: true
							},
							enableMove: {
								content: 'Enable Move',
								width: 100,
								shown: false
							},
							forceMove: {
								content: 'Force Move',
								width: 100,
								shown: false
							},
							enableAction: {
								content: 'Enable Action',
								width: 100,
								shown: false
							},
							negateInjury: {
								content: 'Negate Injury',
								width: 100,
								shown: false
							},
							forceAction: {
								content: 'Force Action',
								width: 100,
								shown: true
							},
							attackCurse: {
								content: 'Attack Curse',
								width: 100,
								shown: true
							},
							expelCurse: {
								content: 'Expel Curse',
								width: 100,
								shown: true
							},
							trapCurse: {
								content: 'Trap Curse',
								width: 100,
								shown: true
							}
						}
					},
					attackCriticalSuccess: {
						content: 'Attack Critical Success',
						width: 100,
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
				modifier: modifier(),
				action1: action(1)
			},
			
			
			race: {
				name: name(),
				description: description(),
				benefit: benefit(),
				statistic: statistic(),
				modifier: modifier(),
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
				modifier: modifier(),
				defense: defense(),
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
				modifier: modifier(),
				defense: defense(),
				action1: action(1)
			},
			
			item: {
				name: name(),
				description: description(),
				item: item(),
				benefit: benefit(),
				modifier: modifier(),
				defense: defense(),
				action1: action(1),
				action2: action(2)
			}
			
		};
		return service;
	});