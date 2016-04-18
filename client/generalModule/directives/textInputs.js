angular.module('freedomsworn')
	.directive('titleInput', [function(){
		return {
			restrict: 'A',
			templateUrl: paths.generalModule.views+'title-input.ng.html',
			scope: { panel: '=', bodyText: '=', defaultText: '=' }
		};
	}])
	
	.directive('descriptionInput', [function(){
		return {
			restrict: 'A',
			templateUrl: paths.generalModule.views+'description-input.ng.html',
			scope: { panel: '=', bodyText: '=', defaultText: '=' }
		};
	}])
	.directive('definitionInput', [function(){
		return {
			restrict: 'A',
			templateUrl: paths.generalModule.views+'definition-input.ng.html',
			scope: { panel: '=', leaderText: '=', bodyText: '=', defaultText: '=' }
		};
	}]);