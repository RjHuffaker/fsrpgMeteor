angular.module('freedomsworn')
	.directive('fsGridModifierRow', function(dataSrvc){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridModifier: '=fsGridModifierRow',
				shownColumns: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-modifier-row.ng.html',
			link: function(scope, element, attrs){
				scope.dataSrvc = dataSrvc;
			}
		};
	})
	.directive('fsGridModifierTitles', function(){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				shownColumns: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-modifier-titles.ng.html'
		};
	});