angular.module('freedomsworn')
	.component('fsGrid', {
		templateUrl: '/client/fsGrid/components/fs-grid.html',
		controllerAs: 'vm',
		bindings: {
			deck: '=',
			shownColumns: '='
		},
		controller($scope, $reactive, $document) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.currentPage = 0;
			
			this.pageSize = 8;
			
			this.rowLimit = 4;
			
			this.rowWidth = function(){
				return 100/this.rowLimit+'%';
			}
			
			this.numberOfPages = function(){
				if(this.deck)
				if(this.deck.cardList)
				return Math.ceil(this.deck.cardList.length / this.pageSize);
			};
			
			var initialize = function(){
				$scope.$on('$destroy', onDestroy);
				$document.on('click', deselect);
			};
			
			var onDestroy = function(enable){
				$document.off('click', deselect);
			};
			
			this.selectRow = function(row){
				console.log(row);
				this.deck.currentRow = row;
			};
			
			var deselect = function(event){
				if(!this.deck) return;
				if(!this.deck.currentRow) return;
				for(elem = event.target; elem; elem = elem.parentNode){
					if(angular.element(elem).hasClass('remain-selected')) return;
				}
				delete this.deck.currentRow;
			};
			
			initialize();
			
		}
	});