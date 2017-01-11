angular.module('freedomsworn')
	.component('fsTableInput', {
		templateUrl: '/client/fsTable/components/fs-table-input.html',
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