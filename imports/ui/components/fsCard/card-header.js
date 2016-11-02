import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './card-header.html';

class CardHeader {
	constructor($scope, $reactive, dataSrvc) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		$scope.dataSrvc = dataSrvc;
		
	}
}

const name = 'cardHeader';

// create a module
export default angular.module(name, [
  angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: CardHeader,
		bindings: {
			card: '='
		}
	});