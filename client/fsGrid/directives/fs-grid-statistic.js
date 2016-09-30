angular.module('freedomsworn')
	.directive('fsGridStatisticRow', function(dataSrvc){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridStatistic: '=fsGridStatisticRow',
				shownColumns: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-statistic-row.ng.html',
			link: function(scope, element, attrs){
				scope.dataSrvc = dataSrvc;
			}
		};
	});