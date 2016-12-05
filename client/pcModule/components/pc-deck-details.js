angular.module('freedomsworn')
	.component('pcDeckDetails', {
		templateUrl: '/client/pcModule/components/pc-deck-details.html',
		controllerAs: 'vm',
		controller($rootScope, $scope, $reactive, $stateParams, $location) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('pcDecks');
			
			this.helpers({
				pcDeck(){
					return PcDecks.findOne({_id: $stateParams.deckId});
				}
			});
			
			this.editPc = function(deck){
				deck.lastModified = new Date();
				
				var _deck = angular.copy(deck);
				
				delete _deck._id;
				
				PcDecks.update({
					_id: deck._id
				}, { $set: _deck });
				
			};
			
			this.exitPc = function(){
				$location.path('/pcDecks');
			};
			
			$scope.$watch('vm.pcDeck.level', function(newVal, oldVal){
				if(newVal !== oldVal){
					$scope.vm.pcDeck.factorHealth();
					$scope.vm.pcDeck.factorStamina();
					$scope.vm.pcDeck.factorSkills();
					$scope.vm.pcDeck.factorTraits();
					$scope.vm.pcDeck.factorFeats();
					$scope.vm.pcDeck.factorAugments();
					$scope.vm.pcDeck.pruneDeck();
					
					$rootScope.$broadcast('fsDeck:onMouseLeave');
				}
			});
			
			
		}
	});