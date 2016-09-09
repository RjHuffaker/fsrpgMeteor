angular.module('freedomsworn')
	.directive('actionSuccess', function(dataSrvc, effectData){
		return {
			restrict: 'A',
			scope: {
				actionSuccess: '='
			},
			templateUrl: paths.cardModule.views+'action-success.ng.html',
			link: function(scope, element, attrs){
				scope.dataSrvc = dataSrvc;
				scope.effectData = effectData;
				
			}
		};
	});