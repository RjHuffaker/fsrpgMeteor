angular.module('freedomsworn')
	.directive('fsGrid', function($document, $timeout){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: { 
				gridDeck: '=fsGrid'
			},
			templateUrl: paths.fsGrid.views+'fs-grid.ng.html',
			link: function(scope, element, attrs) {
				
				var initialize = function(){
					scope.$on('$destroy', onDestroy);
					$document.on('click', deselect);
				};
				
				var onDestroy = function(enable){
					$document.off('click', deselect);
				};
				
				scope.selectRow = function(row){
					console.log(row);
					scope.gridDeck.currentRow = row;
				};
				
				var deselect = function(event){
					if(!scope.gridDeck.currentRow) return;
					for(elem = event.target; elem; elem = elem.parentNode){
						if(angular.element(elem).hasClass('remain-selected')) return;
					}
					delete scope.gridDeck.currentRow;
					scope.$digest();
				};
				
				initialize();
				
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