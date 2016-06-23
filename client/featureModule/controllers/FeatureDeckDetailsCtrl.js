angular.module("freedomsworn")
	.controller("FeatureDeckDetailsCtrl",
		function($scope, $reactive, $meteor, $stateParams, CoreVars, dataSrvc){
			'ngInject';
			
			$scope.CoreVars = CoreVars;
			
			$scope.dataSrvc = dataSrvc;
			
			$reactive(this).attach($scope);
			
			this.subscribe('featureDecks');
			
			this.helpers({
				featureDeck(){
					return $meteor.object(FeatureDecks, $stateParams.deckId, false);
				},
				dependencies(){
					return FeatureDecks.findOne({ "_id": $stateParams.deckId }, {
						transform: function(deck){
							if(deck.deckType !== 'Aspect'){
								var archetypeList = [], allegianceList = [], raceList = [];
								var deckList = FeatureDecks.find({"_id": { $in: deck.dependencies }});
								
								deckList.forEach(function(deck){
									
									for(var ii = 0; ii < deck.cardList.length; ii++){
										var card = deck.cardList[ii];
										if(card.cardData.aspectType === 'Archetype'){
											archetypeList.push(card);
										} else if(card.cardData.aspectType === 'Allegiance'){
											allegianceList.push(card);
										} else if(card.cardData.aspectType === 'Race'){
											raceList.push(card);
										}
									}
								});
								
								return { archetypes: archetypeList, allegiances: allegianceList, races: raceList };
								
							} else {
								return {};
							}
						}
					});
				}
			});
			
			this.saveDeck = function(deck){
				deck.save();
			};
			
		});