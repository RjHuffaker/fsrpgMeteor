import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './card-action.html';

class CardAction {
	constructor($scope, $reactive, dataSrvc, effectData) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		$scope.dataSrvc = dataSrvc;
			
		$scope.effectData = effectData;
		
	}
}


const name = 'cardAction';

// create a module
export default angular.module(name, [
  angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: CardAction,
		bindings: {
			action: '=',
			card: '='
		}
	});