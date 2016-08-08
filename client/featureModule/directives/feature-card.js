angular.module('freedomsworn')
	.directive('featureCard', function(dataSrvc, modalSrvc){
		'ngInject';

		return {
			restrict: 'A',
			templateUrl: paths.featureModule.views+'feature-card.ng.html',
			scope: { card: '=featureCard', deck: '=' },
			link: function(scope, element, attrs){
				scope.dataSrvc = dataSrvc;
				scope.modalSrvc = modalSrvc;
			}
		};
	});