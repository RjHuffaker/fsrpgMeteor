angular.module("freedomsworn")
	.controller("PcDeckListCtrl", 
		function($scope, $rootScope, $reactive, pcBread){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('pcDecks');
			
			this.currentRow ='';
			
			this.helpers({
				deckList(){
					return pcBread.browse();
				}
			});
			
			this.selectRow = function(row){
				this.currentRow = row;
				console.log(row);
			};
			
			this.addDeck = function(){
				pcBread.add();
			};
			
			this.deleteDeck = function(deck){
				pcBread.delete(deck._id);
			};
			
		});