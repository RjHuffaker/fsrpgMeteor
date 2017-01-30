angular.module('freedomsworn')
	.component('pcDeckNew', {
		templateUrl: '/client/pcModule/components/pc-deck-new.html',
		controllerAs: 'vm',
		controller($scope, $element, $rootScope, $reactive, $meteor, $stateParams, $location, $timeout, modalSrvc, pcDefault) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('PcDecks');

			this.helpers({
				deckList(){
					return FeatureDecks.find({"deckType": { $in: ["Class", "Faction", "Race", "Trait", "Feat", "Augment", "Item"] }});
				}
			});
			
			this.newItem = angular.copy(pcDefault);
			
			this.toggleDependency = function(deckId){
				var deckIndex = this.newItem.dependencies.indexOf(deckId);
				
				if (deckIndex > -1) {
					this.newItem.dependencies.splice(deckIndex, 1);
				} else {
					this.newItem.dependencies.push(deckId);
				}
			};

			this.addNewItem = function(newItem){
				
				newItem._id = Random.id();
				newItem.owner = $rootScope.currentUser._id;
				newItem.createdOn = new Date();
				newItem.lastModified = new Date();
				
				newItem = new pcObject(new deckObject(newItem));
				
				newItem.setCardList();
				
				newItem.setPanelPosition();
				
				PcDecks.insert(newItem, function(error, result){
					if(error){
						console.log(error);
					} else if(result) {
						$timeout(function(){
							$location.path('/pcDecks/'+result);
						}, 0);
					}
				});
				
				modalSrvc.current = {};
				
			};
			
			this.cancel = function(){
				modalSrvc.current = {};
			};
			
		}
	});