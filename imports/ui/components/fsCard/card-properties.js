import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './card-properties.html';

class CardProperties {
	constructor($scope, $reactive) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
	}
}

const name = 'cardProperties';

// create a module
export default angular.module(name, [
  angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: CardProperties,
		bindings: {
			card: '='
		}
	});