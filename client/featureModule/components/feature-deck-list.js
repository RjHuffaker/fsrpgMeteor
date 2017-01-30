angular.module('freedomsworn')
	.component('featureDeckList', {
		templateUrl: '/client/featureModule/components/feature-deck-list.html',
		controllerAs: 'vm',
		controller($scope, $rootScope, $reactive, $meteor, $stateParams, CoreVars, dataSrvc, deckDependencies){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('featureDecks');
			
			this.currentRow ='';
			
			this.helpers({
				itemList(){
					return FeatureDecks.find({});
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
			
			this.toggleDependency = function(deckId){
				var deckIndex = this.newDeck.dependencies.indexOf(deckId);
				
				if (deckIndex > -1) {
					this.newDeck.dependencies.splice(deckIndex, 1);
				} else {
					this.newDeck.dependencies.push(deckId);
				}
			};
			
			this.deleteDeck = function(deck){
				FeatureDecks.remove(deck._id);
			};
			
		}
	});