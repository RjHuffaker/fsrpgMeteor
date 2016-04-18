angular.module('freedomsworn')
	.directive('npcOrigin', function(){
		return {
			restrict: 'A',
			templateUrl: paths.originModule.views+'npc-origin.ng.html'
		};
	})
	.directive('originStats', function(){
		return {
			restrict: 'A',
			templateUrl: paths.originModule.views+'origin-stats.ng.html'
		};
	})
	.directive('originDefenses', function(){
		return {
			restrict: 'A',
			templateUrl: paths.originModule.views+'origin-defenses.ng.html'
		};
	});