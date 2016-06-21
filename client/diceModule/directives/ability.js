'use strict';

angular.module('freedomsworn')
	.directive('ability', function(abilityDice){
		'ngInject';

		return {
			restrict: 'A',
			templateUrl: paths.diceModule.views+'ability.ng.html',
			scope: { ability: '=', deck: '=' },
			link: function(scope, element, attrs){
				scope.abilityDice = abilityDice;
			}
		};
	});