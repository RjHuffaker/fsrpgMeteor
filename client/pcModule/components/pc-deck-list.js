angular.module('freedomsworn')
	.component('pcDeckList', {
		templateUrl: '/client/pcModule/components/pc-deck-list.html',
		controllerAs: 'vm',
		controller($rootScope, $scope, $reactive, pcDefault) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('pcDecks');
			
			this.currentRow ='';
			
			this.helpers({
				deckList(){
					return PcDecks.find({});
				}
			});
			
			this.selectRow = function(row){
				this.currentRow = row;
				console.log(row);
				
				row.testPanelIds();
				
			};
			
			this.addDeck = function(){
				var newDeck = pcDefault;
				
				newDeck._id = Random.id();
				newDeck.owner = $rootScope.currentUser._id;
				newDeck.createdOn = new Date();
				newDeck.lastModified = new Date();
				
				newDeck = new pcObject(new deckObject(newDeck));
				
				newDeck.setCardList();
				
				newDeck.setPanelPosition();
				
				PcDecks.insert(newDeck, function(error, result){
					if(error){
						console.log(error);
					} else if(result) {
						console.log(result);
					}
				});
			};
			
			this.deleteDeck = function(deck){
				PcDecks.remove(deck._id);
			};
			
		}
	});