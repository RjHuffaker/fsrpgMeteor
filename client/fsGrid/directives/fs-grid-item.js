angular.module('freedomsworn')
	.directive('fsGridItemRow', function(dataSrvc, shownColumns){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridItem: '=fsGridItemRow'
			},
			templateUrl: paths.fsGrid.views+'fs-grid-item-row.ng.html',
			link: function(scope, element, attrs) {
				scope.dataSrvc = dataSrvc;
				scope.shownColumns = shownColumns;
			}
		};
	})
	.directive('fsGridItemTitles', function(shownColumns){
		'ngInject';
		
		return {
			restrict: 'A',
			templateUrl: paths.fsGrid.views+'fs-grid-item-titles.ng.html',
			link: function(scope, element, attrs) {
				scope.shownColumns = shownColumns;
			}
		};
	});