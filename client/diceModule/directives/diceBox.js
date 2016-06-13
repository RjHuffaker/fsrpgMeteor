angular.module('freedomsworn')
	.directive('diceBox', ['$window', 'CoreVars', 'abilityDice', 
		function($window, CoreVars, abilityDice) {
			return {
				restrict: 'A',
				templateUrl: paths.diceModule.views+'dice-box.ng.html',
				link: function(scope, element, attrs){
					
					scope.CoreVars = CoreVars;
					
					scope.abilityDice = abilityDice;
					
				}
			};
		}]);