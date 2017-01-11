angular.module('freedomsworn')
	.component('fsTableHeader', {
		templateUrl: '/client/fsTable/components/fs-table-header.html',
		controllerAs: 'vm',
		bindings: {
			shownColumns: '=',
			resizeable: '='
		},
		controller($scope, $reactive, dataSrvc, deckDependencies) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
		}
	});