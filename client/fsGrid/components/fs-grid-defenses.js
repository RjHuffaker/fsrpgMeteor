angular.module('freedomsworn')
	.component('fsGridDefenses', {
		templateUrl: '/client/fsGrid/components/fs-grid-defenses.html',
		controllerAs: 'vm',
		bindings: {
			card: '=',
			shownColumns: '='
		},
		controller($scope, $reactive, dataSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.dataSrvc = dataSrvc;
			
		}
	});