angular.module('freedomsworn')
	.component('pcAbility', {
		templateUrl: '/client/pcModule/components/pc-ability.html',
		controllerAs: 'vm',
		bindings: {
			deck: '=',
			card: '=',
			ability: '=abilityDice'
		},
		controller($scope, $reactive, modalSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			$scope.modalSrvc = modalSrvc;
			
		}
	});