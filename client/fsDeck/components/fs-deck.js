angular.module('freedomsworn')
	.component('fsDeck', {
		templateUrl: '/client/fsDeck/components/fs-deck.html',
		controllerAs: 'vm',
		bindings: {
			deck: '='
		},
		controller($scope, $reactive) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
		}
	});