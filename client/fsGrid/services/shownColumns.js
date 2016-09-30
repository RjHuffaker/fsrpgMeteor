angular.module('freedomsworn')
	.factory('shownColumns', function(){
		
		function name(){
			return {
				id: 'Card Name',
				columnTitle: 'Name',
				width: 200,
				shown: true
			};
		};
		
		function aspect(){
			return {
				id: 'Aspect',
				columnTitle: 'Aspect',
				width: 100,
				shown: true
			};
		};
		
		function description(){
			return {
				id: 'Description',
				columnTitle: 'Description',
				width: 250,
				shown: true
			};
		};
		
		function benefit(){
			return {
				id: 'Benefit',
				sectionTitle: 'Benefit',
				shown: false,
				nodes: {
					benefit: {
						id: 'Benefit',
						columnTitle: 'Benefit',
						width: 200,
						shown: true
					},
					criticalSuccess: {
						id: 'Benefit Critical Success',
						columnTitle: 'Critical Success',
						width: 200,
						shown: false
					}
				}
			}
		};
		
		function statistic(){
			return {
				id: 'Core Statistics',
				sectionTitle: 'Core Statistics',
				shown: true,
				nodes: {
					baseDurability: {
						id: 'Base Durability',
						columnTitle: 'Base Durability',
						width: 96,
						shown: true
					},
					baseMoveSpeed: {
						id: 'Base Move Speed',
						columnTitle: 'Base Move Speed',
						width: 96,
						shown: true
					}
				}
			};
		};
		
		function modifier(){
			return {
				id: 'Modifiers',
				sectionTitle: 'Modifiers',
				shown: false,
				nodes: {
					damageModifier: {
						id: 'Damage Modifier',
						columnTitle: 'Damage',
						width: 96,
						shown: true
					},
					durabilityModifier: {
						id: 'Durability Modifier',
						columnTitle: 'Durability',
						width: 96,
						shown: true
					},
					defenseModifier: {
						id: 'Defense Modifier',
						columnTitle: 'Defense',
						width: 96,
						shown: true
					},
					moveSpeedModifier: {
						id: 'Move Speed Modifier',
						columnTitle: 'Move Speed',
						width: 96,
						shown: true
					},
					finesseModifier: {
						id: 'Finesse Modifier',
						columnTitle: 'Finesse',
						width: 96,
						shown: true
					},
					carryingCapacityModifier: {
						id: 'Carrying Capacity Modifier',
						columnTitle: 'Carrying Capacity',
						width: 96,
						shown: true
					}
				}
			};
		};
		
		function item(){
			return {
				id: 'Item Properties',
				sectionTitle: 'Item Properties',
				shown: false,
				nodes: {
					slot: {
						id: 'Item Slot',
						columnTitle: 'Slot',
						width: 120,
						shown: true
					},
					type: {
						id: 'Item Type',
						columnTitle: 'Type',
						width: 120,
						shown: true
					},
					weight: {
						id: 'Item Weight',
						columnTitle: 'Weight',
						width: 81,
						shown: true
					},
					cost: {
						id: 'Item Cost',
						columnTitle: 'Cost',
						width: 81,
						shown: true
					}
				}
			};
		};
		
		function defense(){
			return {
				id: 'Defenses',
				sectionTitle: 'Defenses',
				shown: false,
				nodes: {
					block: {
						id: 'Block',
						columnTitle: 'Block',
						width: 100,
						shown: true
					},
					dodge: {
						id: 'Dodge',
						columnTitle: 'Dodge',
						width: 100,
						shown: false
					},
					alertness: {
						id: 'Alertness',
						columnTitle: 'Alertness',
						width: 100,
						shown: false
					},
					tenacity: {
						id: 'Tenacity',
						columnTitle: 'Tenacity',
						width: 100,
						shown: false
					}
				}
			};
		};
		
		function action(num){
			return {
				id: 'Action '+num,
				sectionTitle: 'Action '+num,
				shown: false,
				nodes: {
					name: {
						id: 'Name '+num,
						columnTitle: 'Name',
						width: 150,
						shown: true
					},
					target: {
						id: 'Target '+num,
						columnTitle: 'Target',
						width: 81,
						shown: false
					},
					usage: {
						id: 'Usage '+num,
						columnTitle: 'Usage',
						width: 81,
						shown: false
					},
					frequency: {
						id: 'Frequency '+num,
						columnTitle: 'Frequency',
						width: 81,
						shown: false
					},
					count: {
						id: 'Count '+num,
						columnTitle: 'Count',
						width: 81,
						shown: true
					},
					effect: {
						id: 'Effect '+num,
						sectionTitle: 'Effect',
						shown: false,
						nodes: {
							moveEffect: {
								id: 'Move Effect '+num,
								columnTitle: 'Move Effect',
								width: 81,
								shown: true
							},
							customEffect: {
								id: 'Custom Effect '+num,
								columnTitle: 'Custom Effect',
								width: 81,
								shown: true
							},
							listItem1: {
								id: 'List Item 1 '+num,
								columnTitle: 'List Item 1',
								width: 81,
								shown: true
							},
							listItem2: {
								id: 'List Item 2 '+num,
								columnTitle: 'List Item 2',
								width: 81,
								shown: true
							},
							listItem3: {
								id: 'List Item 3 '+num,
								columnTitle: 'List Item 3',
								width: 81,
								shown: true
							}
						}
					},
					attackType: {
						id: 'Attack Type '+num,
						columnTitle: 'Attack Type',
						width: 100,
						shown: false
					},
					attackRoll: {
						id: 'Attack Roll '+num,
						columnTitle: 'Attack Roll',
						width: 100,
						shown: false
					},
					attackSuccess: {
						id: 'Attack Success '+num,
						sectionTitle: 'Attack Success',
						shown: false,
						nodes: {
							damage: {
								id: 'Damage '+num,
								columnTitle: 'Damage',
								width: 81,
								shown: true
							},
							enableMove: {
								id: 'Enable Move '+num,
								columnTitle: 'Enable Move',
								width: 81,
								shown: true
							},
							forceMove: {
								id: 'Force Move '+num,
								columnTitle: 'Force Move',
								width: 81,
								shown: true
							},
							enableAction: {
								id: 'Enable Action '+num,
								columnTitle: 'Enable Action',
								width: 81,
								shown: true
							},
							negateInjury: {
								id: 'Negate Injury '+num,
								columnTitle: 'Negate Injury',
								width: 81,
								shown: true
							},
							forceAction: {
								id: 'Force Action '+num,
								columnTitle: 'Force Action',
								width: 81,
								shown: true
							},
							attackCurse: {
								id: 'Attack Curse '+num,
								columnTitle: 'Attack Curse',
								width: 81,
								shown: true
							},
							expelCurse: {
								id: 'Expel Curse '+num,
								columnTitle: 'Expel Curse',
								width: 81,
								shown: true
							},
							trapCurse: {
								id: 'Trap Curse '+num,
								columnTitle: 'Trap Curse',
								width: 81,
								shown: true
							}
						}
					},
					attackCriticalSuccess: {
						columnTitle: 'Attack Critical Success',
						width: 100,
						shown: false
					}
					
				}
			};
		};
		
		var service = {
			
			class: {
				sectionTitle: 'Card Details',
				shown: true,
				nodes: {
					name: name(),
					description: description(),
					benefit: benefit(),
					modifier: modifier(),
					action1: action(1)
				}
			},
			
			race: {
				sectionTitle: 'Card Details',
				shown: true,
				nodes: {
					name: name(),
					description: description(),
					benefit: benefit(),
					statistic: statistic(),
					modifier: modifier(),
					action1: action(1)
				}
			},
			
			faction: {
				sectionTitle: 'Card Details',
				shown: true,
				nodes: {
					name: name(),
					description: description(),
					benefit: benefit(),
					action1: action(1)
				}
			},
			
			trait: {
				sectionTitle: 'Card Details',
				shown: true,
				nodes: {
					name: name(),
					aspect: aspect(),
					description: description(),
					benefit: benefit(),
					modifier: modifier(),
					defense: defense(),
					action1: action(1)
				}
			},
			
			feat: {
				sectionTitle: 'Card Details',
				shown: true,
				nodes: {
					name: name(),
					aspect: aspect(),
					description: description(),
					action1: action(1)
				}
			},
			
			augment: {
				sectionTitle: 'Card Details',
				shown: true,
				nodes: {
					name: name(),
					aspect: aspect(),
					description: description(),
					benefit: benefit(),
					modifier: modifier(),
					defense: defense(),
					action1: action(1)
				}
			},
			
			item: {
				sectionTitle: 'Card Details',
				shown: true,
				nodes: {
					name: name(),
					description: description(),
					item: item(),
					benefit: benefit(),
					modifier: modifier(),
					defense: defense(),
					action1: action(1),
					action2: action(2)
				}
			}
			
		};
		return service;
	});