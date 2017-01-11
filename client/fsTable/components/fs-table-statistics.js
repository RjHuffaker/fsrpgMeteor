angular.module('freedomsworn')
	.component('fsTableStatistics', {
		templateUrl: '/client/fsTable/components/fs-table-statistics.html',
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