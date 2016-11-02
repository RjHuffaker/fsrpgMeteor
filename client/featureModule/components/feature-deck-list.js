angular.module('freedomsworn')
	.component('featureDeckList', {
		templateUrl: '/client/featureModule/components/feature-deck-list.html',
		controllerAs: 'vm',
		controller($scope, $reactive, $meteor, $stateParams, CoreVars, dataSrvc, deckDependencies){
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
				
				row.testPanelIds();
				
			};
			
			this.deleteDeck = function(deck){
				FeatureDecks.remove(deck._id);
			};
			
		}
	});