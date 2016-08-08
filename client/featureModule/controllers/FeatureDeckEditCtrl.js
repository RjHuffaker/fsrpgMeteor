angular.module("freedomsworn")
	.controller("FeatureDeckEditCtrl",
		function($scope, $reactive, $meteor, $stateParams, featureBread, CoreVars, dataSrvc, shownColumns, deckDependencies){
			'ngInject';
			
			$scope.CoreVars = CoreVars;
			
			this.dataSrvc = dataSrvc;
			
			this.shownColumns = shownColumns;
			
			this.deckDependencies = deckDependencies;
			
			$reactive(this).attach($scope);
			
			this.shownColumns = {
				card: ['Name'],
				item: ['Slot'],
				modifiers: ['Durability', 'Finesse', 'Speed'],
				defenses: ['Block', 'Dodge', 'Alertness', 'Tenacity'],
				actions: [ ['Name'], ['Name'], ['Name'], ['Name'] ]
			};
			
			this.subscribe('featureDecks');
			
			this.helpers({
				featureDeck(){
					var deck = featureBread.read($stateParams.deckId);
					if(deck.dependencies) deckDependencies.fetchDependencies(deck);
					return deck;
				},
				depList(){
					return FeatureDecks.find({"deckType": "Aspect"});
				}
			});
			
			this.saveDeck = function(deck){
				delete deck.currentRow;
				deck.save();
			};
			
			this.toggleDependency = function(deck, deckId){
				deckDependencies.toggleDependency(deck, deckId);
			};
			
			this.changeAspect = function(card, aspect){
				if (card.aspect !== aspect){
					card.aspect = aspect;
				}
			};
			
			this.setCardList = function(){
				this.featureDeck.setCardList();
			};
			
			this.moveUp = function(){
				var _curr = this.featureDeck.currentRow;
				if(_curr.cardNumber > 1){
					var _prev = this.featureDeck.getPrev(_curr._id);
					var _next = this.featureDeck.getNext(_curr._id);
					var _prevPrev = this.featureDeck.getPrev(_prev._id);
					
					_curr.cardNumber--;
					_prev.cardNumber++;
					
					this.featureDeck.setAdjacent(_prevPrev, _curr);
					this.featureDeck.setAdjacent(_curr, _prev);
					this.featureDeck.setAdjacent(_prev, _next);
					
					this.featureDeck.setPanelPosition();
				}
			};
			
			this.moveDown = function(){
				var _curr = this.featureDeck.currentRow;
				if(_curr.cardNumber < _curr.deckSize){
					var _prev = this.featureDeck.getPrev(_curr._id);
					var _next = this.featureDeck.getNext(_curr._id);
					var _nextNext = this.featureDeck.getNext(_next._id);
					
					_curr.cardNumber++;
					_next.cardNumber--;
					
					this.featureDeck.setAdjacent(_prev, _next);
					this.featureDeck.setAdjacent(_next, _curr);
					this.featureDeck.setAdjacent(_curr, _nextNext);
					
					this.featureDeck.setPanelPosition();
				}
			};
			
			this.addCard = function(){
				var deckSize = this.featureDeck.deckSize;
				var deckType = this.featureDeck.deckType;
				
				this.featureDeck.addToDeck({
					_id: Random.id(),
					x_dim: 15,
					y_dim: 21,
					name: deckType+' '+(deckSize+1),
					cardType: deckType,
					actions: [
						{ keywords: [] },
						{ keywords: [] },
						{ keywords: [] },
						{ keywords: [] }
					]
				});
				
				this.featureDeck.setPanelPosition();
				
			};
			
			this.removeCard = function(){
				this.featureDeck.removeFromDeck(this.featureDeck.currentRow);
			};
			
		});