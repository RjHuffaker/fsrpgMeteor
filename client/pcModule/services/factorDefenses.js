'use strict';

// Factory-service for managing pc1 data.
angular.module('freedomsworn')
	.factory('factorDefenses', [
		function(){
			
			var service = {};
			
			service.factorBlock = function(pcDeck){
				var dice_a = pcDeck.abilities[0].dice;
				var dice_b = pcDeck.abilities[1].dice;
				if (Number(dice_a.sides) > Number(dice_b.sides)){
					pcDeck.block = '2' + dice_a.name;
				} else {
					pcDeck.block = '2' + dice_b.name;
				}
			};
			
			service.factorDodge = function(pcDeck){
				var dice_a = pcDeck.abilities[2].dice;
				var dice_b = pcDeck.abilities[3].dice;
				if (Number(dice_a.sides) > Number(dice_b.sides)){
					pcDeck.dodge = '2' + dice_a.name;
				} else {
					pcDeck.dodge = '2' + dice_b.name;
				}
			};
			
			service.factorAlertness = function(pcDeck){
				var dice_a = pcDeck.abilities[4].dice;
				var dice_b = pcDeck.abilities[5].dice;
				if (Number(dice_a.sides) > Number(dice_b.sides)){
					pcDeck.alertness = '2' + dice_a.name;
				} else {
					pcDeck.alertness = '2' + dice_b.name;
				}
			};
			
			service.factorTenacity = function(pcDeck){
				var dice_a = pcDeck.abilities[6].dice;
				var dice_b = pcDeck.abilities[7].dice;
				if (Number(dice_a.sides) > Number(dice_b.sides)){
					pcDeck.tenacity = '2' + dice_a.name;
				} else {
					pcDeck.tenacity = '2' + dice_b.name;
				}
			};
			
			return service;
		}]);