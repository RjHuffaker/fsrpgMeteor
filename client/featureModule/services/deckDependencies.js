angular.module('freedomsworn')
	.factory('deckDependencies',
		function($stateParams){
			'ngInject';
			
			var service = {
				archetypes: [],
				allegiances: [],
				races: []
			};
			
			FeatureDecks.find({ "_id": $stateParams.deckId })
				.map(function(deck){
					if(deck.deckType !== 'Aspect'){
						FeatureDecks.find({"_id": { $in: deck.dependencies }})
							.forEach(function(deck){
								for(var ii = 0; ii < deck.cardList.length; ii++){
									var card = deck.cardList[ii];
									if(card.cardData.aspectType === 'Archetype'){
										service.archetypes.push(card.cardData);
									} else if(card.cardData.aspectType === 'Allegiance'){
										service.allegiances.push(card.cardData);
									} else if(card.cardData.aspectType === 'Race'){
										service.races.push(card.cardData);
									}
								}
							});	
					}
				});
			
			return service;
			
		});