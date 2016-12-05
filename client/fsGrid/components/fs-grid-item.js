angular.module('freedomsworn')
	.component('fsGridItem', {
		templateUrl: '/client/fsGrid/components/fs-grid-item.html',
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