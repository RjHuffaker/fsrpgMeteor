import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './card-footer.html';

class CardFooter {
  constructor($scope, $reactive, dataSrvc, effectData) {
    'ngInject';
    
    $reactive(this).attach($scope);
    
  }
}

const name = 'cardFooter';

// create a module
export default angular.module(name, [
  angularMeteor
])
  .component(name, {
    templateUrl,
    controllerAs: 'vm',
    controller: CardFooter,
    bindings: {
      card: '='
    }
  });