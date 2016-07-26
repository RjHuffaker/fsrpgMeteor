angular.module('freedomsworn')
	.directive('fsGridDefenseRow', function(dataSrvc, shownColumns){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridDefense: '=fsGridDefenseRow'
			},
			templateUrl: paths.fsGrid.views+'fs-grid-defense-row.ng.html',
			link: function(scope, element, attrs) {
				scope.dataSrvc = dataSrvc;
				scope.shownColumns = shownColumns;
			}
		};
	})
	.directive('fsGridDefenseTitles', function(shownColumns){
		'ngInject';
		
		return {
			restrict: 'A',
			templateUrl: paths.fsGrid.views+'fs-grid-defense-titles.ng.html',
			link: function(scope, element, attrs) {
				scope.shownColumns = shownColumns;
			}
		};
	});