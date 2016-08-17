angular.module("freedomsworn")
	.controller("PcDeckDetailsCtrl", 
		function($rootScope, $scope, $meteor, $reactive, $stateParams, $location, CoreVars, pcBread){
			'ngInject';
			
			$scope.CoreVars = CoreVars;
			
			$reactive(this).attach($scope);
			
			this.subscribe('pcDecks');
			
			this.helpers({
				pcDeck(){
					return pcBread.read($stateParams.deckId);
				}
			});
			
			this.editPc = function(deck){
				pcBread.edit(deck);
			};
			
			this.exitPc = function(){
				$location.path('/pcDecks');
			};
			
			
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
					$scope.vm.pcDeck.pruneDeck();
					
					$rootScope.$broadcast('fsDeck:onMouseLeave');
				}
			});
			
		});