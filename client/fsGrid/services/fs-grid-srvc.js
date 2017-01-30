angular.module('freedomsworn')
	.factory('fsGridSrvc', function(){
		
		
		function name(){
			return {
				id: 'Card Name',
				columnTitle: 'Name',
				shown: true,
				keepOpen: true
			};
		};
		
		function aspect(){
			return {
				id: 'Aspect',
				columnTitle: 'Aspect',
				shown: true
			};
		};
		
		function description(){
			return {
				id: 'Description',
				columnTitle: 'Description',
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
						shown: true
					},
					criticalSuccess: {
						id: 'Benefit Critical Success',
						columnTitle: 'Critical Success',
						shown: false
					}
				}
			}
		};
		
		function statistics(){
			return {
				id: 'Core Statistics',
				sectionTitle: 'Core Statistics',
				shown: true,
				nodes: {
					baseDurability: {
						id: 'Base Durability',
						columnTitle: 'Base Durability',
						shown: true
					},
					baseMoveSpeed: {
						id: 'Base Move Speed',
						columnTitle: 'Base Move Speed',
						shown: true
					}
				}
			};
		};
		
		function modifiers(){
			return {
				id: 'Modifiers',
				sectionTitle: 'Modifiers',
				shown: false,
				nodes: {
					damageModifier: {
						id: 'Damage Modifier',
						columnTitle: 'Damage',
						shown: true
					},
					durabilityModifier: {
						id: 'Durability Modifier',
						columnTitle: 'Durability',
						shown: true
					},
					defenseModifier: {
						id: 'Defense Modifier',
						columnTitle: 'Defense',
						shown: true
					},
					moveSpeedModifier: {
						id: 'Move Speed Modifier',
						columnTitle: 'Move Speed',
						shown: true
					},
					finesseModifier: {
						id: 'Finesse Modifier',
						columnTitle: 'Finesse',
						shown: true
					},
					carryingCapacityModifier: {
						id: 'Carrying Capacity Modifier',
						columnTitle: 'Carrying Capacity',
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
						shown: true
					},
					type: {
						id: 'Item Type',
						columnTitle: 'Type',
						shown: true
					},
					weight: {
						id: 'Item Weight',
						columnTitle: 'Weight',
						shown: true
					},
					cost: {
						id: 'Item Cost',
						columnTitle: 'Cost',
						shown: true
					}
				}
			};
		};
		
		function defenses(){
			return {
				id: 'Defenses',
				sectionTitle: 'Defenses',
				shown: false,
				nodes: {
					block: {
						id: 'Block',
						columnTitle: 'Block',
						shown: true
					},
					dodge: {
						id: 'Dodge',
						columnTitle: 'Dodge',
						shown: false
					},
					alertness: {
						id: 'Alertness',
						columnTitle: 'Alertness',
						shown: false
					},
					tenacity: {
						id: 'Tenacity',
						columnTitle: 'Tenacity',
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
						shown: true,
						keepOpen: true
					},
					target: {
						id: 'Target '+num,
						columnTitle: 'Target',
						shown: false
					},
					usage: {
						id: 'Usage '+num,
						columnTitle: 'Usage',
						shown: false
					},
					count: {
						id: 'Count '+num,
						columnTitle: 'Count',
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
								shown: true
							},
							customEffect: {
								id: 'Custom Effect '+num,
								columnTitle: 'Custom Effect',
								shown: true
							},
							listItem1: {
								id: 'List Item 1 '+num,
								columnTitle: 'List Item 1',
								shown: true
							},
							listItem2: {
								id: 'List Item 2 '+num,
								columnTitle: 'List Item 2',
								shown: true
							},
							listItem3: {
								id: 'List Item 3 '+num,
								columnTitle: 'List Item 3',
								shown: true
							}
						}
					},
					attackType: {
						id: 'Attack Type '+num,
						columnTitle: 'Attack Type',
						shown: false
					},
					attackRoll: {
						id: 'Attack Roll '+num,
						columnTitle: 'Attack Roll',
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
								shown: true
							},
							enableMove: {
								id: 'Enable Move '+num,
								columnTitle: 'Enable Move',
								shown: true
							},
							forceMove: {
								id: 'Force Move '+num,
								columnTitle: 'Force Move',
								shown: true
							},
							enableAction: {
								id: 'Enable Action '+num,
								columnTitle: 'Enable Action',
								shown: true
							},
							negateInjury: {
								id: 'Negate Injury '+num,
								columnTitle: 'Negate Injury',
								shown: true
							},
							forceAction: {
								id: 'Force Action '+num,
								columnTitle: 'Force Action',
								shown: true
							},
							attackCurse: {
								id: 'Attack Curse '+num,
								columnTitle: 'Attack Curse',
								shown: true
							},
							expelCurse: {
								id: 'Expel Curse '+num,
								columnTitle: 'Expel Curse',
								shown: true
							},
							trapCurse: {
								id: 'Trap Curse '+num,
								columnTitle: 'Trap Curse',
								shown: true
							}
						}
					},
					attackCriticalSuccess: {
						columnTitle: 'Attack Critical Success',
						shown: false
					}
					
				}
			};
		};
		
		var service = {
			
			class: {
				sectionTitle: 'Card Details',
				shown: true,
				keepOpen: true,
				nodes: {
					name: name(),
					description: description(),
					benefit: benefit(),
					modifiers: modifiers(),
					action1: action(1)
				}
			},
			
			race: {
				sectionTitle: 'Card Details',
				shown: true,
				keepOpen: true,
				nodes: {
					name: name(),
					description: description(),
					benefit: benefit(),
					statistics: statistics(),
					modifiers: modifiers(),
					action1: action(1)
				}
			},
			
			faction: {
				sectionTitle: 'Card Details',
				shown: true,
				keepOpen: true,
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
				keepOpen: true,
				nodes: {
					name: name(),
					aspect: aspect(),
					description: description(),
					benefit: benefit(),
					modifiers: modifiers(),
					defenses: defenses(),
					action1: action(1)
				}
			},
			
			feat: {
				sectionTitle: 'Card Details',
				shown: true,
				keepOpen: true,
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
				keepOpen: true,
				nodes: {
					name: name(),
					aspect: aspect(),
					description: description(),
					benefit: benefit(),
					modifiers: modifiers(),
					defenses: defenses(),
					action1: action(1)
				}
			},
			
			item: {
				sectionTitle: 'Card Details',
				shown: true,
				keepOpen: true,
				nodes: {
					name: name(),
					description: description(),
					item: item(),
					benefit: benefit(),
					modifiers: modifiers(),
					defenses: defenses(),
					action1: action(1),
					action2: action(2)
				}
			}
			
		};
		
		return service;
	});