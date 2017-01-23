angular.module('freedomsworn')
	.component('fsGridBenefit', {
		templateUrl: '/client/fsGrid/components/fs-grid-benefit.html',
		controllerAs: 'vm',
		bindings: {
			card: '='
		},
		controller($scope, $reactive, dataSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.dataSrvc = dataSrvc;
			
		}
	});