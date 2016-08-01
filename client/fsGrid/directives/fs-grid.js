angular.module('freedomsworn')
	.directive('fsGrid', function(){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: { 
				gridDeck: '=fsGrid'
			},
			templateUrl: paths.fsGrid.views+'fs-grid.ng.html',
			link: function(scope, element, attrs) {
				
				scope.selectRow = function(row){
					console.log(row);
					scope.gridDeck.currentRow = row;
				};
				
			}
		};
	})
	.directive('fsGridRow', function(dataSrvc, shownColumns, deckDependencies){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridCard: '=fsGridRow',
				deckType: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-row.ng.html',
			link: function(scope, element, attrs) {
				scope.dataSrvc = dataSrvc;
				scope.shownColumns = shownColumns;
				scope.deckDependencies = deckDependencies;
			}
		};
	})
	.directive('fsGridTitles', function(shownColumns){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				deckType: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-titles.ng.html',
			link: function(scope, element, attrs) {
				scope.shownColumns = shownColumns;
			}
		};
	});