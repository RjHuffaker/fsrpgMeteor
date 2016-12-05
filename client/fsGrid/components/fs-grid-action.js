angular.module('freedomsworn')
	.component('fsGridAction', {
		templateUrl: '/client/fsGrid/components/fs-grid-action.html',
		controllerAs: 'vm',
		bindings: {
			card: '=',
			action: '=',
			actionId: '=',
			shownColumns: '='
		},
		controller($scope, $reactive, dataSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.dataSrvc = dataSrvc;
			
		}
	});