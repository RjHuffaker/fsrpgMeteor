angular.module('freedomsworn')
	.directive('diceBox',
		function($window, CoreVars, abilityDice) {
			'ngInject';

			return {
				restrict: 'A',
				templateUrl: paths.diceModule.views+'dice-box.ng.html',
				link: function(scope, element, attrs){
					
					scope.CoreVars = CoreVars;
					
					scope.abilityDice = abilityDice;
					
				}
			};
		});