angular.module('freedomsworn')
	.factory('columnSrvc', function(){
		
		function name(){
			return {
				id: 'Card Name',
				columnTitle: 'Name',
				width: 130,
				shown: true,
				keepOpen: true
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
				width: 220,
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
		
		function penalty(){
			return {
				id: 'Penalty',
				sectionTitle: 'Penalty',
				shown: false,
				nodes: {
					penalty: {
						id: 'Penalty',
						columnTitle: 'Penalty',
						width: 200,
						shown: true
					},
					criticalFailure: {
						id: 'Penalty Critical Failure',
						columnTitle: 'Critical Failure',
						width: 200,
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
		
		function modifiers(){
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
						width: 88,
						shown: true
					},
					cost: {
						id: 'Item Cost',
						columnTitle: 'Cost',
						width: 88,
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
						width: 110,
						shown: true
					},
					dodge: {
						id: 'Dodge',
						columnTitle: 'Dodge',
						width: 110,
						shown: false
					},
					alertness: {
						id: 'Alertness',
						columnTitle: 'Alertness',
						width: 110,
						shown: false
					},
					tenacity: {
						id: 'Tenacity',
						columnTitle: 'Tenacity',
						width: 110,
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
						width: 160,
						shown: true,
						keepOpen: true
					},
					target: {
						id: 'Target '+num,
						columnTitle: 'Target',
						width: 60,
						shown: false
					},
					usage: {
						id: 'Usage '+num,
						columnTitle: 'Usage',
						width: 88,
						shown: false
					},
					disruptivePrompt: {
						id: 'Disruptive Prompt '+num,
						columnTitle: 'Disruptive Prompt',
						width: 200,
						shown: false
					},
					responsivePrompt: {
						id: 'Responsive Prompt '+num,
						columnTitle: 'Responsive Prompt',
						width: 200,
						shown: false
					},
					count: {
						id: 'Count '+num,
						columnTitle: 'Count',
						width: 88,
						shown: false
					},
					effect: {
						id: 'Effect '+num,
						sectionTitle: 'Effect',
						shown: false,
						nodes: {
							customEffect: {
								id: 'Custom Effect '+num,
								columnTitle: 'Custom Effect',
								width: 200,
								shown: true
							},
							moveEffect: {
								id: 'Move Effect '+num,
								columnTitle: 'Move Effect',
								width: 200,
								shown: false
							},
							listItem1: {
								id: 'List Item 1 '+num,
								columnTitle: 'List Item 1',
								width: 88,
								shown: false
							},
							listItem2: {
								id: 'List Item 2 '+num,
								columnTitle: 'List Item 2',
								width: 88,
								shown: false
							},
							listItem3: {
								id: 'List Item 3 '+num,
								columnTitle: 'List Item 3',
								width: 88,
								shown: false
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
						width: 120,
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
								width: 88,
								shown: true
							},
							enableMove: {
								id: 'Enable Move '+num,
								columnTitle: 'Enable Move',
								width: 88,
								shown: true
							},
							forceMove: {
								id: 'Force Move '+num,
								columnTitle: 'Force Move',
								width: 88,
								shown: true
							},
							enableAction: {
								id: 'Enable Action '+num,
								columnTitle: 'Enable Action',
								width: 88,
								shown: true
							},
							negateInjury: {
								id: 'Negate Injury '+num,
								columnTitle: 'Negate Injury',
								width: 88,
								shown: true
							},
							forceAction: {
								id: 'Force Action '+num,
								columnTitle: 'Force Action',
								width: 88,
								shown: true
							},
							attackCurse: {
								id: 'Attack Curse '+num,
								columnTitle: 'Attack Curse',
								width: 88,
								shown: true
							},
							expelCurse: {
								id: 'Expel Curse '+num,
								columnTitle: 'Expel Curse',
								width: 88,
								shown: true
							},
							trapCurse: {
								id: 'Trap Curse '+num,
								columnTitle: 'Trap Curse',
								width: 88,
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
			
			terrain: {
				sectionTitle: 'Terrain Details',
				shown: true,
				keepOpen: true,
				nodes: {
					name: name(),
					description: description(),
					benefit: benefit(),
					penalty: penalty(),
					action1: action(1)
				}
			},
			
			surge: {
				sectionTitle: 'Surge Details',
				shown: true,
				keepOpen: true,
				nodes: {
					name: name(),
					description: description(),
					benefit: benefit(),
					action1: action(1)
				}
			},
			
			hindrance: {
				sectionTitle: 'Hindrance Details',
				shown: true,
				keepOpen: true,
				nodes: {
					name: name(),
					description: description(),
					penalty: penalty(),
					action1: action(1)
				}
			},
			
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