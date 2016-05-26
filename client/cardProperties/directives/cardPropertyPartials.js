angular.module('freedomsworn')
	.directive('durabilityModifier', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/cardProperties/views/durability-modifier.ng.html'
		};
	})
	.directive('speedModifier', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/cardProperties/views/speed-modifier.ng.html'
		};
	})
	.directive('finesseModifier', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/cardProperties/views/finesse-modifier.ng.html'
		};
	})
	.directive('cardDescription', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/cardProperties/views/card-description.ng.html'
		};
	})
	.directive('cardBenefit', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/cardProperties/views/card-benefit.ng.html'
		};
	})
	.directive('cardCriticalSuccess', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/cardProperties/views/card-critical-success.ng.html'
		};
	})
	.directive('blockDefense', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/cardProperties/views/block-defense.ng.html'
		};
	})
	.directive('dodgeDefense', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/cardProperties/views/dodge-defense.ng.html'
		};
	})
	.directive('alertnessDefense', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/cardProperties/views/alertness-defense.ng.html'
		};
	})
	.directive('tenacityDefense', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/cardProperties/views/tenacity-defense.ng.html'
		};
	});