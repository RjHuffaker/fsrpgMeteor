angular.module('freedomsworn')
	.component('fsGridInput', {
		templateUrl: '/client/fsGrid/components/fs-grid-input.html',
		controllerAs: 'vm',
		bindings: {
			inputModel: '=',
			inputType: '=',
			columnShown: '=',
			toggleHeader: '=',
			optionHeaders: '=',
			options: '='
		},
		controller($scope, $reactive, dataSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.dataSrvc = dataSrvc;
			
		}
	});