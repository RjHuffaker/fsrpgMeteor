angular.module('freedomsworn')
	.directive('cardAction', function(dataSrvc, effectData){
		'ngInject';

		return {
			restrict: 'A',
			scope: {
				cardAction: '=',
				card: '='
			},
			templateUrl: paths.cardModule.views+'card-action.ng.html',
			link: function(scope, element, attrs){
				scope.dataSrvc = dataSrvc;
				
				scope.effectData = effectData;
				
			}
		};
	});