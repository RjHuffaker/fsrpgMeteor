angular.module('freedomsworn')
	.component('fsTableItem', {
		templateUrl: '/client/fsTable/components/fs-table-item.html',
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