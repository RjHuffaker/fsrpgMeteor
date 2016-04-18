angular.module('freedomsworn')
	.directive('navBar', [function(){
		return {
			restrict: 'A',
			templateUrl: paths.navBarModule.views+'nav-bar.ng.html'
		};
	}]);