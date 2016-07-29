angular.module("freedomsworn")
	.controller("PcDeckDetailsCtrl", 
		function($scope, $meteor, $reactive, $stateParams, CoreVars, pcBread){
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
					$scope.vm.pcDeck.factorExperience();
					if(newVal !== CoreVars.EXP){
						CoreVars.EXP = newVal;
					}
				}
			});
			
			$scope.$watch('vm.pcDeck.level', function(newVal, oldVal){
				if(newVal !== oldVal){
					$scope.vm.pcDeck.factorHealth();
					$scope.vm.pcDeck.factorStamina();
					$scope.vm.pcDeck.factorTraits();
					$scope.vm.pcDeck.factorFeats();
					$scope.vm.pcDeck.factorAugments();
				}
			});
			
		});