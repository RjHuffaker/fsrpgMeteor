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
	})
	.directive('fsGridItemTitles', function(){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridDeck: '=',
				shownColumns: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-item-titles.ng.html'
		};
	});