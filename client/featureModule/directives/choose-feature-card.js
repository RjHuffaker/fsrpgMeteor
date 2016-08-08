angular.module('freedomsworn')
	.directive('chooseFeatureCard', function(modalSrvc){
		'ngInject';

		return {
			restrict: 'A',
			templateUrl: paths.featureModule.views+'choose-feature-card.ng.html',
			scope: { card: '=chooseFeatureCard', deck: '=' },
			link: function(scope, element, attrs){
				
				scope.modalSrvc = modalSrvc;
				
			}
		};
	});