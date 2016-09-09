angular.module("freedomsworn")
	.controller("FeatureDeckEditCtrl",
		function($scope, $reactive, $meteor, $stateParams, featureBread, CoreVars, dataSrvc, shownColumns, deckDependencies){
			'ngInject';
			
			$scope.CoreVars = CoreVars;
			
			this.dataSrvc = dataSrvc;
			
			this.deckDependencies = deckDependencies;
			
			$reactive(this).attach($scope);
			
			this.subscribe('featureDecks');
			
			this.helpers({
				featureDeck(){
					var deck = featureBread.read($stateParams.deckId);
					if(deck.dependencies) deckDependencies.fetchDependencies(deck);
					switch(deck.deckType){
						case 'Class':
							this.shownColumns = shownColumns.class;
							break;
						case 'Faction':
							this.shownColumns = shownColumns.faction;
							break;
						case 'Race':
							this.shownColumns = shownColumns.race;
							break;
						case 'Trait':
							this.shownColumns = shownColumns.trait;
							break;
						case 'Feat':
							this.shownColumns = shownColumns.feat;
							break;
						case 'Augment':
							this.shownColumns = shownColumns.augment;
							break;
						case 'Item':
							this.shownColumns = shownColumns.item;
							break;
					}
					
					return deck;
				},
				depList(){
					return FeatureDecks.find({"deckType": { $in: ["Class", "Faction", "Race"] }});
				}
			});
			
			this.saveDeck = function(deck){
				delete deck.currentRow;
				deck.save();
			};
			
			this.toggleDependency = function(deck, deckId){
				deckDependencies.toggleDependency(deck, deckId);
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
					action1: {},
					action2: {}
				});
				
				this.featureDeck.setPanelPosition();
				
			};
			
			this.removeCard = function(){
				this.featureDeck.removeFromDeck(this.featureDeck.currentRow);
			};
			
			this.fixStuff = function(){
				
				var extractNumber = function(test){
					if(test.includes('1')){
						return 1;
					} else if(test.includes('2')){
						return 2;
					} else if(test.includes('3')){
						return 3;
					} else if(test.includes('4')){
						return 4;
					} else if(test.includes('5')){
						return 5;
					}
				};
				
				var extractDie = function(test){
					if(test.includes('1d4')){
						return 1;
					} else if(test.includes('1d6')){
						return 2;
					} else if(test.includes('1d8')){
						return 3;
					} else if(test.includes('1d10')){
						return 4;
					} else if(test.includes('1d12')){
						return 5;
					}
				};
				
				var fixEffects = function(action){
					if(!action.success) return;
					if(!action.success.effect) return;
					
					if(action.success.effect.includes('may use')){
						action.success.enableAction = extractNumber(action.success.effect);
					} else if(action.success.effect.includes('may negate')){
						action.success.negateInjury = extractDie(action.success.effect);
					} else if(action.success.effect.includes('must use')){
						action.success.forceAction = extractNumber(action.success.effect);
					} else if(action.success.effect.includes('choose one creature')){
						action.success.attackCurse = extractDie(action.success.effect);
					} else if(action.success.effect.includes('occupies')){
						action.success.expelCurse = extractDie(action.success.effect);
					} else if(action.success.effect.includes('leaves')){
						action.success.trapCurse = extractDie(action.success.effect);
					} else {
						console.log('unidentified effect: ', action.success.effect);
						return;
					}
					
					delete action.success.effect;
				};
				
				for(var i = 0; i < this.featureDeck.cardList.length; i++){
					var _card = this.featureDeck.cardList[i];
					
					fixEffects(_card.action1);
					fixEffects(_card.action2);
					
				}
			};
			
			
		});