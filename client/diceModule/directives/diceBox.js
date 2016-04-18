'use strict';

// Directive for managing dice box
angular.module('freedomsworn')
	.directive('diceBox', ['$window', 'CoreVars', 'abilityDice', 'pcBread', function($window, CoreVars, abilityDice, pcBread) {
		return {
			restrict: 'A',
			templateUrl: paths.diceModule.views+'dice-box.ng.html',
			link: function(scope, element, attrs){
				
				scope.CoreVars = CoreVars;
				
				scope.abilityDice = abilityDice;
				
				scope.pcDeck = pcBread.deck;
				
			}
		};
	}]);