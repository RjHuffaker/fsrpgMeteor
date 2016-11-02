angular.module('freedomsworn')
	.component('pcCard1', {
		templateUrl: '/client/pcModule/components/pc-card-1.html',
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