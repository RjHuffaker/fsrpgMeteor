angular.module("freedomsworn")
	.controller("NpcDeckCtrl", function($scope, $meteor, $stateParams, $location){
		'ngInject';

		$scope.npcDeck = {
			name: 'NPC Deck',
			dependencies: [],
			deckType: '',
			deckSize: 1,
			cardList: [
				{
					_id: 'npcDeckOptions',
					panelType: 'npcDeckOptions',
					x_coord: 0,
					y_coord: 0,
					x_dim: 10,
					y_dim: 14,
					above: null,
					below: null,
					left: null,
					right: null
				}
			]
		};	
	});