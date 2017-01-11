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
			
			this.newItem = {
				name: 'New Deck',
				type: 'Class',
				size: 5,
				dependencies: []
			};
			
			this.addItem = function(){
				
				var newItem = {
					name: this.newItem.name,
					createdOn: new Date(),
					lastModified: new Date(),
					deckSize: this.newItem.size,
					deckType: this.newItem.type,
					x_margin: 3,
					y_margin: 3,
					dependencies: this.newItem.dependencies,
					cardList: []
				};
				
				newItem._id = Random.id();
				newItem.owner = $rootScope.currentUser._id;

				for(var i = 0; i < newItem.size; i++){
					newItem.cardList.push({
						_id: Random.id(),
						deckId: newItem._id,
						x_dim: 15,
						y_dim: 21,
						name: 'Card '+(i+1),
						cardType: newItem.type,
						cardNumber: i+1,
						action1: {},
						action2: {}
					});
				}
				
				newItem = new deckObject(newItem);
				
				newItem.setCardList();
				
				FeatureDecks.insert(newItem);
				
			};
			
			this.deleteDeck = function(deck){
				FeatureDecks.remove(deck._id);
			};
			
		}
	});