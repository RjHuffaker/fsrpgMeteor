angular.module('freedomsworn')
	.directive('fsGridHeader', function(dataSrvc){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridHeader: '=fsGridHeader'
			},
			templateUrl: paths.fsGrid.views+'fs-grid-header.ng.html'
		};
	})