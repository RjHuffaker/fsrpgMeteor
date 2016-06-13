angular.module('freedomsworn')
	.directive('featureOptions', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureModule.views+'feature-options.ng.html'
		};
	});