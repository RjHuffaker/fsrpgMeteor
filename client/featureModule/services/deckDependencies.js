angular.module('freedomsworn')
	.factory('deckDependencies', function(){
		'ngInject';
		
		var service = {
			classes: [],
			factions: [],
			races: []
		};
		
		service.fetchDependencies = function(deck){
			service.classes.length = 0;
			service.factions.length = 0;
			service.races.length = 0;
			
			if(['Trait','Feat','Augment','Item'].indexOf(deck.deckType) > -1){
				FeatureDecks.find({"_id": { $in: deck.dependencies }})
					.forEach(function(deck){
						if(deck.deckType === 'Class'){
							for(var i = 0; i < deck.cardList.length; i++){
								service.classes.push(deck.cardList[i]);
							}
						} else if(deck.deckType === 'Faction'){
							for(var i = 0; i < deck.cardList.length; i++){
								service.factions.push(deck.cardList[i]);
							}
						} else if(deck.deckType === 'Race'){
							for(var i = 0; i < deck.cardList.length; i++){
								service.races.push(deck.cardList[i]);
							}
						}
					});
			}
		};
		
		service.toggleDependency = function(deck, deckId){
			var deckIndex = deck.dependencies.indexOf(deckId);
			
			if (deckIndex > -1) {
				deck.dependencies.splice(deckIndex, 1);
			} else {
				deck.dependencies.push(deckId);
			}
			
			service.fetchDependencies(deck);
		};
		
		return service;
		
	});