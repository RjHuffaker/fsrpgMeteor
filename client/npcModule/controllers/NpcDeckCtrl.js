angular.module("freedomsworn")
	.controller("NpcDeckCtrl", ['$scope', '$meteor', '$stateParams', '$location',
		function($scope, $meteor, $stateParams, $location){
			
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
						above: {
							adjacent: null,
							overlap: null
						},
						below: {
							adjacent: null,
							overlap: null
						},
						left: {
							adjacent: null,
							overlap: null
						},
						right: {
							adjacent: null,
							overlap: null
						}
					}
				]
			};
			
		}]);