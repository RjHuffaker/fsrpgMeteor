angular.module('freedomsworn')
	.directive('cardPc1', function($location, pcBread){
		'ngInject';

		return {
			restrict: 'A',
			scope: { card: '=cardPc1', deck: '=' },
			templateUrl: paths.pcModule.views+'card-pc-1.ng.html'
		};
	})
	.directive('cardPc2', function(CoreVars){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: { card: '=cardPc2', deck: '=' },
			templateUrl: paths.pcModule.views+'card-pc-2.ng.html',
			link: function(scope, element, attrs){
				scope.CoreVars = CoreVars;
			}
		};
	})
	.directive('cardPc3', function(){
		return {
			restrict: 'A',
			scope: { card: '=cardPc3', deck: '=' },
			templateUrl: paths.pcModule.views+'card-pc-3.ng.html'
		};
	});