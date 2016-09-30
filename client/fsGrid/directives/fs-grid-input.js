angular.module('freedomsworn')
	.directive('fsGridInput', function(dataSrvc){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				fsGridInput: '=',
				inputType: '=',
				columnShown: '=',
				toggleHeader: '=',
				optionHeaders: '=',
				options: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-input.ng.html'
		};
	})