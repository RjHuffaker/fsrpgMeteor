'use strict';

angular.module('freedomsworn')
	.directive('ability', function(){
		'ngInject';

		return {
			restrict: 'A',
			templateUrl: paths.diceModule.views+'ability.ng.html',
			scope: {
				ability: '=',
				deck: '='
			}
		};
	});