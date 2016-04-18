'use strict';

// Factory-service for managing pc stats.
angular.module('freedomsworn')
	.factory('factorStats', ['CoreVars',
		function(CoreVars){
			
			var service = {};
			
			service.factorExperience = function(pcDeck){
				var mLevel = 0;
				var mExperience = Number(pcDeck.experience);
				for (var increment = 8; increment <= mExperience; increment++){
					mLevel++;
					mExperience = mExperience - increment;
				}
				pcDeck.level = mLevel;
			};
			
			service.factorHealth = function(pcDeck){
				pcDeck.healthLimit = 
					Math.round(
						(Number(pcDeck.abilities[0].dice.sides) +
							Number(pcDeck.abilities[1].dice.sides)
						) * ((pcDeck.level || 0)/16 + 1));
				pcDeck.healthCurrent =
					Number(pcDeck.healthLimit - pcDeck.injury);
			};
			
			service.factorStamina = function(pcDeck){
				pcDeck.staminaLimit = 
					Math.round(
						(Number(pcDeck.abilities[0].dice.sides) +
							Number(pcDeck.abilities[1].dice.sides)
						) * ((pcDeck.level || 0)/16 + 1));
				pcDeck.staminaCurrent =
					Number(pcDeck.healthLimit - pcDeck.injury);
			};
			
			service.factorCarryingCapacity = function(pcDeck){
				pcDeck.carryCurrent = 0;
				pcDeck.carryLimit =
					Number(pcDeck.abilities[0].dice.sides) +
					Number(pcDeck.abilities[1].dice.sides);
			};
			
			return service;
		}]);