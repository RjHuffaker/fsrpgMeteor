angular.module('freedomsworn')
	.factory('deckDependencies', function(){
		'ngInject';
		
		var service = {
			archetypes: [],
			allegiances: [],
			races: []
		};
		
		service.fetchDependencies = function(deck){
			service.archetypes.length = 0;
			service.allegiances.length = 0;
			service.races.length = 0;
			
			if(deck.deckType !== 'Aspect'){
				FeatureDecks.find({"_id": { $in: deck.dependencies }})
					.forEach(function(deck){
						for(var ii = 0; ii < deck.cardList.length; ii++){
							var card = deck.cardList[ii];
							if(card.cardData.aspectType === 'Archetype'){
								console.log(card.cardData.name);
								service.archetypes.push(card.cardData);
							} else if(card.cardData.aspectType === 'Allegiance'){
								console.log(card.cardData.name);
								service.allegiances.push(card.cardData);
							} else if(card.cardData.aspectType === 'Race'){
								console.log(card.cardData.name);
								service.races.push(card.cardData);
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