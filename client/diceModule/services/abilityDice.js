angular.module('freedomsworn')
	.factory('abilityDice', function($rootScope, modalSrvc, factorDefenses, factorStats) {
		'ngInject';
		
		var service = {
			deck: {}
		};
		
		var chosenAbility = { order: 0 };
		var chosenDie = { order: 0 };
		var previousDie = { order: 0 };
		
		service.chooseAbility = function(ability, deck){
			chosenAbility = ability;
			service.deck = deck;
		};
		
		service.chooseDie = function(order){
			modalSrvc.current.show = false;
			chosenDie = service.deck.dicepool[order];
			previousDie = chosenAbility.dice;
			service.deck.dicepool[order] = service.deck.dicepool[0];
			
			if(previousDie.order > 0){
				service.deck.dicepool[previousDie.order] = previousDie;
			}
			
			service.deck.abilities[chosenAbility.order].dice = chosenDie;
			
			switch(chosenAbility.order){
				case 0:
				case 1:
					factorDefenses.factorBlock(service.deck);
					factorStats.factorHealth(service.deck);
					factorStats.factorStamina(service.deck);
					factorStats.factorCarryingCapacity(service.deck);
					break;
				case 2:
				case 3:
					factorDefenses.factorDodge(service.deck);
					break;
				case 4:
				case 5:
					factorDefenses.factorAlertness(service.deck);
					break;
				case 6:
				case 7:
					factorDefenses.factorTenacity(service.deck);
					break;
			}
			
		};
		
		return service;
		
	});