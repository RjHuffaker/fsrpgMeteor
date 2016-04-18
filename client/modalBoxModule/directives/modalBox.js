angular.module('freedomsworn')
	.directive('modalBox', ['CoreVars', function(CoreVars){
		return {
			restrict: 'A',
			templateUrl: paths.modalBoxModule.views+'modal-box.ng.html',
			scope: '=',
			link: function(scope, element, attrs){
				
				scope.CoreVars = CoreVars;
				
			}
		};
	}]);