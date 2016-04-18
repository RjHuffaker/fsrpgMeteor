angular.module('freedomsworn')
	.directive('npcDeckOptions', function(){
		return {
			restrict: 'A',
			templateUrl: paths.npcModule.views+'npc-deck-options.ng.html'
		};
	})
	.directive('npcSummary', function(){
		return {
			restrict: 'A',
			templateUrl: paths.npcModule.views+'npc-summary.ng.html'
		};
	})
	.directive('npcOptions', function(){
		return {
			restrict: 'A',
			templateUrl: paths.npcModule.views+'npc-options.ng.html'
		};
	});