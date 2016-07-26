angular.module('freedomsworn')
	.directive('fsGridModifierRow', function(dataSrvc, shownColumns){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridModifier: '=fsGridModifierRow'
			},
			templateUrl: paths.fsGrid.views+'fs-grid-modifier-row.ng.html',
			link: function(scope, element, attrs){
				scope.dataSrvc = dataSrvc;
				scope.shownColumns = shownColumns;
			}
		};
	})
	.directive('fsGridModifierTitles', function(shownColumns){
		'ngInject';
		
		return {
			restrict: 'A',
			templateUrl: paths.fsGrid.views+'fs-grid-modifier-titles.ng.html',
			link: function(scope, element, attrs){
				scope.shownColumns = shownColumns;
			}
		};
	});