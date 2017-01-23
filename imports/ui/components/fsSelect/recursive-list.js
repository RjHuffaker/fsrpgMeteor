import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './recursive-list.html';

class RecursiveList {
	constructor($rootScope, $scope, $reactive) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.helpers({
			currentSelection(){
				return Session.get('currentSelection');
			}
		});
		
		this.selectOption = function(selection){
			console.log(selection);
			
			selection.shown = !selection.shown;
			if(this.singleSelect){
				Session.set('currentSelection', selection);
			}
		};
		
		this.showSelected = function(selection){
			if(this.singleSelect){
				return this.currentSelection.id === selection.id;
			} else {
				return selection.shown;
			}
			
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
			singleSelect: '='
		}
	});