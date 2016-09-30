angular.module('freedomsworn')
	.directive('fsGrid', function($document, $timeout){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: { 
				gridDeck: '=fsGrid',
				shownColumns: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid.ng.html',
			link: function(scope, element, attrs) {
				
				scope.currentPage = 0;
				
				scope.pageSize = 8;
				
				scope.numberOfPages = function(){
					if(scope.gridDeck.cardList)
					return Math.ceil(scope.gridDeck.cardList.length / scope.pageSize);
				};
				
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
	.directive('fsGridRow', function(dataSrvc, deckDependencies){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridCard: '=fsGridRow',
				deckType: '=',
				shownColumns: '='
			},
			templateUrl: paths.fsGrid.views+'fs-grid-row.ng.html',
			link: function(scope, element, attrs) {
				scope.dataSrvc = dataSrvc;
				scope.deckDependencies = deckDependencies;
				
				scope.totalWidth = function(shownColumns){
					var _total = 54;
					
					var recursiveCheck = function(obj){
						for(var key in obj.nodes){
							if(obj.nodes.hasOwnProperty(key)){
								var node = obj.nodes[key];
								if(node.shown){
									if(node.width){
										_total += node.width;
									}
									recursiveCheck(node);
								}
							}
						}
					};
					
					recursiveCheck(shownColumns);
					
					return _total;
				};
			}
		};
	});