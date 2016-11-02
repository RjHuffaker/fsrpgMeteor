import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './action-success.html';

class ActionSuccess {
	constructor($scope, $reactive, dataSrvc, effectData) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.dataSrvc = dataSrvc;
		
		this.effectData = effectData;
		
	}
}

const name = 'actionSuccess';

// create a module
export default angular.module(name, [
  angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: ActionSuccess,
		bindings: {
			success: '='
		}
	});