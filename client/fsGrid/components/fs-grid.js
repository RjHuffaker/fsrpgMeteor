angular.module('freedomsworn')
	.component('fsGrid', {
		templateUrl: '/client/fsGrid/components/fs-grid.html',
		controllerAs: 'vm',
		bindings: {
			deck: '='
		},
		controller($scope, $reactive, $document, fsGridSrvc, dataSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.helpers({
				shownCells(){
					
					var _deck = this.getReactively('deck');
					
					if(_deck){
						switch(_deck.deckType){
							case 'Terrain':
								return fsGridSrvc.terrain;
								break;
							case 'Surge':
								return fsGridSrvc.surge;
								break;
							case 'Hindrance':
								return fsGridSrvc.hindrance;
								break;
							case 'Class':
								return fsGridSrvc.class;
								break;
							case 'Faction':
								return fsGridSrvc.faction;
								break;
							case 'Race':
								return fsGridSrvc.race;
								break;
							case 'Trait':
								return fsGridSrvc.trait;
								break;
							case 'Feat':
								return fsGridSrvc.feat;
								break;
							case 'Augment':
								return fsGridSrvc.augment;
								break;
							case 'Item':
								return fsGridSrvc.item;
								break;
						}
					}
				},
				currentFilter(){
					return Session.get('currentSelection');
				},
				currentCell(){
					return Session.get('currentCell');
				}
			});
			
			this.dataSrvc = dataSrvc;
			
			this.gridColumns = 8;
			
			this.gridRows = 8;
			
			this.currentPage = 0;
			
			this.columnWidth = function(){
				return 100/this.gridColumns+'%';
			}
			
			this.rowHeight = function(){
				return 100/this.gridRows+'%';
			}
			
			this.numberOfPages = function(){
				if(this.deck)
				if(this.deck.cardList)
				return Math.ceil(this.deck.cardList.length / (this.gridColumns * this.gridRows));
			};
			
			var initialize = function(){
				$scope.$on('$destroy', onDestroy);
				$document.on('click', deselect);
			};
			
			var onDestroy = function(enable){
				$document.off('click', deselect);
			};
			
			this.selectCell = function(card){
				Session.set('currentCell', card);
				console.log(card);
			};
			
			this.showSelected = function(card){
				return this.currentCell._id === card._id;
			};
			
			var deselect = function(event){
				for(elem = event.target; elem; elem = elem.parentNode){
					if(angular.element(elem).hasClass('remain-selected')) return;
				}
				Session.set('currentCell', {_id: 0});
			};
			
			initialize();
			
		}
	});