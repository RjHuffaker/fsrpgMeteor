angular.module('freedomsworn')
	.component('pcCard3', {
		templateUrl: '/client/pcModule/components/pc-card-3.html',
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