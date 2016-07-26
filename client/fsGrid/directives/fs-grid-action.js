angular.module('freedomsworn')
	.directive('fsGridActionRow', function(dataSrvc, shownColumns){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridAction: '=fsGridActionRow',
				actionId: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-action-row.ng.html',
			link: function(scope, element, attrs) {
				scope.dataSrvc = dataSrvc;
				scope.shownColumns = shownColumns;
			}
		};
	})
	.directive('fsGridActionTitles', function(shownColumns){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				actionId: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-action-titles.ng.html',
			link: function(scope, element, attrs) {
				scope.shownColumns = shownColumns;
			}
		};
	});