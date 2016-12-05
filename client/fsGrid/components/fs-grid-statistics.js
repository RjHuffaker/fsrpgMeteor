angular.module('freedomsworn')
	.component('fsGridStatistics', {
		templateUrl: '/client/fsGrid/components/fs-grid-statistics.html',
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