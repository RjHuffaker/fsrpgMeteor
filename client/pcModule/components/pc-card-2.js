angular.module('freedomsworn')
	.component('pcCard2', {
		templateUrl: '/client/pcModule/components/pc-card-2.html',
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