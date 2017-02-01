import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './action-critical-success.html';

class ActionCriticalSuccess {
	constructor($scope, $reactive, dataSrvc, effectData) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.dataSrvc = dataSrvc;
		
		this.effectData = effectData;
		
	}
}

const name = 'actionCriticalSuccess';

// create a module
export default angular.module(name, [
  angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: ActionCriticalSuccess,
		bindings: {
			criticalSuccess: '='
		}
	});