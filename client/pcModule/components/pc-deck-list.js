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
			
			this.addItem = function(){
				var newItem = pcDefault;
				
				newItem._id = Random.id();
				newItem.owner = $rootScope.currentUser._id;
				newItem.createdOn = new Date();
				newItem.lastModified = new Date();
				
				newItem = new pcObject(new deckObject(newItem));
				
				newItem.setCardList();
				
				newItem.setPanelPosition();
				
				PcDecks.insert(newItem, function(error, result){
					if(error){
						console.log(error);
					} else if(result) {
						$timeout(function(){
							$location.path('/pcDecks/'+result);
						}, 0);
					}
				});
			};
			
			this.deleteItem = function(item){
				PcDecks.remove(item._id);
			};
			
		}
	});