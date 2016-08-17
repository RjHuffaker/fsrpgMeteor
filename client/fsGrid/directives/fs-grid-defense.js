angular.module('freedomsworn')
	.directive('fsGridDefenseRow', function(dataSrvc){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridDefense: '=fsGridDefenseRow',
				shownColumns: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-defense-row.ng.html',
			link: function(scope, element, attrs) {
				scope.dataSrvc = dataSrvc;
			}
		};
	})
	.directive('fsGridDefenseTitles', function(){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				shownColumns: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-defense-titles.ng.html'
		};
	});