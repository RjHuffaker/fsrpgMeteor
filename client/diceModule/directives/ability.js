'use strict';

angular.module('freedomsworn')
	.directive('ability', ['abilityDice', function(abilityDice){
		return {
			restrict: 'A',
			templateUrl: paths.diceModule.views+'ability.ng.html',
			scope: {ability: '='},
			link: function(scope, element, attrs){
				scope.abilityDice = abilityDice;
			}
		};
	}]);