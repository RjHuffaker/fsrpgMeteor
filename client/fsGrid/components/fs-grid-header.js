angular.module('freedomsworn')
	.component('fsGridHeader', {
		templateUrl: '/client/fsGrid/components/fs-grid-header.html',
		controllerAs: 'vm',
		bindings: {
			shownColumns: '='
		},
		controller($scope, $reactive, dataSrvc, deckDependencies) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
		}
	});