angular.module('freedomsworn')
	.component('ruleSetNew', {
		templateUrl: '/client/ruleSet/components/rule-set-new.html',
		controllerAs: 'vm',
		controller($reactive, $scope, $rootScope, $location, $timeout, modalSrvc){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('featureDecks');

			this.helpers({
				deckList(){
					return FeatureDecks.find({"deckType": { $in: ["Class", "Faction", "Race"] }});
				}
			});

			this.newItem = {
				name: 'New Item',
				rules: {},
				templates: {},
				dependencies: []
			};
			
			this.toggleDependency = function(deckId){
				var deckIndex = this.deck.dependencies.indexOf(deckId);
				
				if (deckIndex > -1) {
					this.deck.dependencies.splice(deckIndex, 1);
				} else {
					this.deck.dependencies.push(deckId);
				}
			};

			this.addNewItem = function(newItem){
				
				newItem.createdOn = new Date();
				newItem.lastModified = new Date();
				newItem._id = Random.id();
				newItem.owner = $rootScope.currentUser._id;
				
				RuleSets.insert(newItem, function(error, result){
          if(error){
            console.log(error);
          } else if(result) {
            console.log(result);
            $timeout(function(){
              $location.path('/ruleSetEdit/'+result);
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