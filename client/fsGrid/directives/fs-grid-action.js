angular.module('freedomsworn')
	.directive('fsGridActionRow', function(dataSrvc){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridAction: '=fsGridActionRow',
				actionId: '=',
				shownColumns: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-action-row.ng.html',
			link: function(scope, element, attrs) {
				scope.dataSrvc = dataSrvc;
			}
		};
	})
	.directive('fsGridActionTitles', function(){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				actionId: '=',
				shownColumns: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-action-titles.ng.html'
		};
	});