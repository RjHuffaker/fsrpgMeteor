angular.module('freedomsworn')
	.component('featureDeckView', {
		templateUrl: '/client/featureModule/components/feature-deck-view.html',
		controllerAs: 'vm',
		controller($scope, $reactive, $stateParams) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('featureDecks');
			
			this.helpers({
				featureDeck(){
					return FeatureDecks.findOne({_id: $stateParams.deckId});
				}
			});
			
			this.saveDeck = function(deck){
				deck.save();
			};
			
		}
	});