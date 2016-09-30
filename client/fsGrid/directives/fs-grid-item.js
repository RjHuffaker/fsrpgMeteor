angular.module('freedomsworn')
	.directive('fsGridItemRow', function(dataSrvc){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridItem: '=fsGridItemRow',
				shownColumns: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-item-row.ng.html',
			link: function(scope, element, attrs) {
				scope.dataSrvc = dataSrvc;
			}
		};
	});