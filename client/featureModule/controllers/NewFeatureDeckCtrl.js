angular.module("freedomsworn")
	.controller("NewFeatureDeckCtrl",
		function($scope, $meteor, $reactive, $stateParams, $location, featureBread){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.deck = {
				name: 'New Deck',
				type: 'Aspect',
				size: 5
			};
			
			this.addNewDeck = function(name, size, type){
				featureBread.add(name, size, type);
			};
			
			
		});