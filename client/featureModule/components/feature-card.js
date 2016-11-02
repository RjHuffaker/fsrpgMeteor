angular.module('freedomsworn')
	.component('featureCard', {
		templateUrl: '/client/featureModule/components/feature-card.html',
		controllerAs: 'vm',
		bindings: {
			card: '=',
			deck: '='
		},
		controller($scope, $reactive) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
		}
	});