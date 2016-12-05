angular.module('freedomsworn')
	.component('pcDiceBox', {
		templateUrl: '/client/pcModule/components/pc-dice-box.html',
		controllerAs: 'vm',
		bindings: {
			deck: '='
		},
		controller($scope, $reactive, modalSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.chooseDie = function(order){
				modalSrvc.current.show = false;
				this.deck.chooseDie(order);
			};
			
			this.modalSrvc = modalSrvc;
			
		}
	});