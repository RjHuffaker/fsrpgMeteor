angular.module('freedomsworn')
	.component('fsGridPenalty', {
		templateUrl: '/client/fsGrid/components/fs-grid-penalty.html',
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