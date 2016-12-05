angular.module('freedomsworn')
	.component('pcDeckDependencies', {
		templateUrl: '/client/pcModule/components/pc-deck-dependencies.html',
		controllerAs: 'vm',
		bindings: {
			deck: '='
		},
		controller($scope, $reactive, deckDependencies) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.depList = FeatureDecks.find({}).fetch();
			
			this.toggleDependency = function(deck, deckId){
				deckDependencies.toggleDependency(deck, deckId);
			};
			
			this.fetchDependencies = function(deck){
				deckDependencies.fetchDependencies(deck);
			};
		}
	});