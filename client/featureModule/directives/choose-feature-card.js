angular.module('freedomsworn')
	.directive('chooseFeatureCard', function(dataSrvc){
		'ngInject';

		return {
			restrict: 'A',
			templateUrl: paths.featureModule.views+'choose-feature-card.ng.html',
			scope: { card: '=chooseFeatureCard', deck: '=' },
			link: function(scope, element, attrs){
				scope.dataSrvc = dataSrvc;
				
				
			}
		};
	});