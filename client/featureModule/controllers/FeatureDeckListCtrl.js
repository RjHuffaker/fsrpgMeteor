angular.module("freedomsworn")
	.controller("FeatureDeckListCtrl",
		function($scope, $reactive){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('featureDecks');
			
			this.currentRow ='';
			
			this.helpers({
				deckList(){
					return FeatureDecks.find({});
				}
			});
			
			this.selectRow = function(row){
				this.currentRow = row;
				console.log(row);
			};
			
			this.deleteDeck = function(deck){
				FeatureDecks.remove(deck._id);
			};
			
		});