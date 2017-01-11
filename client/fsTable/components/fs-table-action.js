angular.module('freedomsworn')
	.component('fsTableAction', {
		templateUrl: '/client/fsTable/components/fs-table-action.html',
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