angular.module("freedomsworn")
	.controller("PcDeckDetailsCtrl", 
		function($scope, $meteor, $reactive, $stateParams, CoreVars, pcBread, abilityDice, PcFeature, factorStats){
			'ngInject';
			
			$scope.CoreVars = CoreVars;
			
			$reactive(this).attach($scope);
			
			this.subscribe('pcDecks');
			
			this.helpers({
				pcDeck(){
					return pcBread.read($stateParams.deckId);
				}
			});
			
			$scope.$watch('CoreVars.EXP', function(newVal, oldVal){
				if(newVal !== oldVal){
					CoreVars.EXP = parseInt(newVal);
					$scope.vm.pcDeck.experience = parseInt(newVal);
				}
			});
			
			$scope.$watch('vm.pcDeck.experience', function(newVal, oldVal){
				if(newVal !== oldVal){
					factorStats.factorExperience($scope.vm.pcDeck);
					if(newVal !== CoreVars.EXP){
						CoreVars.EXP = newVal;
					}
				}
			});
			
			$scope.$watch('vm.pcDeck.level', function(newVal, oldVal){
				if(newVal !== oldVal){
					factorStats.factorHealth($scope.vm.pcDeck);
					factorStats.factorStamina($scope.vm.pcDeck);
					PcFeature.factorTraitLimit($scope.vm.pcDeck);
					PcFeature.factorFeatLimit($scope.vm.pcDeck);
					PcFeature.factorAugmentLimit($scope.vm.pcDeck);
				}
			});
			
		});