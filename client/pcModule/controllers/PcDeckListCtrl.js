angular.module("freedomsworn")
	.controller("PcDeckListCtrl", 
		function($scope, $rootScope, $reactive, $location, pcDefault, DeckUtils){
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
			};
			
			this.deleteDeck = function(deck){
				PcDecks.remove(deck._id);
			};
			
			this.addDeck = function(){
				var newDeck = pcDefault;
			
				newDeck._id = new Meteor.Collection.ObjectID().toString();
				newDeck.owner = $rootScope.currentUser._id;
				
				DeckUtils.setCardList(newDeck.cardList);
				
				PcDecks.insert(newDeck);
				
				console.log(newDeck);
				
				$location.path('/pcDecks/'+newDeck._id);
			};
			
		});