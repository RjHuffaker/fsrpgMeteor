import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './recursive-list.html';

class RecursiveList {
	constructor($scope, $reactive) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.itemClick = function(value){
			value.shown = !value.shown;
		};
			
	}
}


const name = 'recursiveList';

// create a module
export default angular.module(name, [
  angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: RecursiveList,
		bindings: {
			options: '=',
			recursiveClick: '&'
		}
	});