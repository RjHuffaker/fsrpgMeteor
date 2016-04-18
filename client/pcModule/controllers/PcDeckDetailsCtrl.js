angular.module("freedomsworn")
	.controller("PcDeckDetailsCtrl", ['$scope', '$rootScope', '$meteor', '$stateParams', '$location', 'CoreVars', 'pcBread', 'abilityDice', 'factorDefenses', 'factorStats', 'PcFeature',
		function($scope, $rootScope, $meteor, $stateParams, $location, CoreVars, pcBread, abilityDice, factorDefenses, factorStats, PcFeature){
			
			$scope.CoreVars = CoreVars;
			
			$scope.pcBread = pcBread;
			
			$scope.abilityDice = abilityDice;
			
			$scope.pcBread.read($stateParams.pcDeckId);
			
			$rootScope.$on('abilityDice:chooseDie', function(event, ability){
				switch(ability){
					case 0:
					case 1:
						factorDefenses.factorBlock(pcBread.deck);
						factorStats.factorHealth(pcBread.deck);
						factorStats.factorStamina(pcBread.deck);
						factorStats.factorCarryingCapacity(pcBread.deck);
						break;
					case 2:
					case 3:
						factorDefenses.factorDodge(pcBread.deck);
						break;
					case 4:
					case 5:
						factorDefenses.factorAlertness(pcBread.deck);
						break;
					case 6:
					case 7:
						factorDefenses.factorTenacity(pcBread.deck);
						break;
				}
			});
			
			$scope.$watch('CoreVars.EXP', function(newVal, oldVal){
				if(newVal !== oldVal){
					CoreVars.EXP = parseInt(newVal);
					pcBread.deck.experience = parseInt(newVal);
				}
			});
			
			$scope.$watch('pcBread.deck.experience', function(newVal, oldVal){
				if(newVal !== oldVal){
					factorStats.factorExperience(pcBread.deck);
					if(newVal !== CoreVars.EXP){
						CoreVars.EXP = newVal;
					}
				}
			});
			
			$scope.$watch('pcBread.deck.level', function(newVal, oldVal){
				if(newVal !== oldVal){
					factorStats.factorHealth(pcBread.deck);
					factorStats.factorStamina(pcBread.deck);
					PcFeature.factorTraitLimit(pcBread.deck);
					PcFeature.factorFeatLimit(pcBread.deck);
					PcFeature.factorAugmentLimit(pcBread.deck);
				}
			});
			
		}]);