angular.module('freedomsworn')
	.component('pcDeckList', {
		templateUrl: '/client/pcModule/components/pc-deck-list.html',
		controllerAs: 'vm',
		controller($rootScope, $scope, $reactive, $location, $timeout, pcDefault) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('pcDecks');
			
			this.helpers({
				itemList(){
					return PcDecks.find({});
				}
			});
			
			this.selectItem = function(item){
				this.currentItem = item;
				console.log(item);
			};
			
			this.orderBy = 'title';
			
			this.reverse = false;
			
			this.toggleOrder = function(column){
				if(this.orderBy !== column){
					this.orderBy = column;
					this.reverse = false;
				} else {
					this.reverse = !this.reverse;
				}
			};
			
			this.deleteItem = function(item){
				PcDecks.remove(item._id);
				this.currentItem = '';
			};
			
		}
	});