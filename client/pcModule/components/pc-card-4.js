angular.module('freedomsworn')
	.component('pcCard4', {
		templateUrl: '/client/pcModule/components/pc-card-4.html',
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