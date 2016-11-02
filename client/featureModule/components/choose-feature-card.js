angular.module('freedomsworn')
	.component('chooseFeatureCard', {
		templateUrl: '/client/featureModule/components/choose-feature-card.html',
		controllerAs: 'vm',
		bindings: {
			card: '=',
			deck: '='
		},
		controller($scope, $reactive, modalSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.modalSrvc = modalSrvc;
				
		}
	});