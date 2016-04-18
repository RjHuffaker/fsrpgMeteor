'use strict';

angular.module('freedomsworn')
	.factory('abilityDice', ['$rootScope', 'modalSrvc', function($rootScope, modalSrvc) {
		
		var service = {};
		
		var chosenAbility = { order: 0 };
		
		var chosenDie = { order: 0 };
		
		var previousDie = { order: 0 };
		
		service.chooseAbility = function(ability){
			
			chosenAbility = ability;
			
		};
		
		service.chooseDie = function(pcDeck, order){
			
      modalSrvc.current.show = false;
      
      chosenDie = pcDeck.dicepool[order];
      
      previousDie = chosenAbility.dice;
      
      pcDeck.dicepool[order] = pcDeck.dicepool[0];
      
      if(previousDie.order > 0){
      	
          pcDeck.dicepool[previousDie.order] = previousDie;
          
      }
      
      pcDeck.abilities[chosenAbility.order].dice = chosenDie;
      
      $rootScope.$broadcast('abilityDice:chooseDie', chosenAbility.order);
      
		};
		
		return service;
		
	}]);