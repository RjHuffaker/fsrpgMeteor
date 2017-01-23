import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as RecursiveList } from '/imports/ui/components/fsSelect/recursive-list';

import templateUrl from './fs-select.html';

class FsSelect {
	constructor($rootScope, $scope, $reactive) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.dropdownId = Random.id();
		
		this.selectOption = function(selection){
			console.log('select option', selection);
			if(selection){
				if(this.selectType === 'array'){
					if(this.selection.indexOf(selection) < 0) {
						this.selection.push(selection);
					}
				} else if(this.selectType === 'id'){
					if(this.selection.indexOf(selection) > 0) {
						this.selection.push(selection._id);
					}
				} else if(this.selectType === 'boolean'){
					this.options[selection] = !this.options[selection];
				} else {
					this.selection = selection;
				}
			} else if(this.selectType === undefined){
				this.selection = '';
			}
			
			if(this.callback){
				this.callback();
			}
			
			$scope.$eval(this.callback());
		};
		
		this.showSelected = function(selection){
			if(!this.selection) return;
			if(this.selectType === 'array'){
				return this.selection.indexOf(selection) > -1;
			} else if(this.selectType === 'id'){
				return this.selection.indexOf(selection._id) > -1;
			} else {
				return angular.equals(selection, this.selection);
			}
		};
	}
}


const name = 'fsSelect';

// create a module
export default angular.module(name, [
  angularMeteor, RecursiveList
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: FsSelect,
		bindings: {
			selectId: '=',
			selectType: '=',
			selection: '=',
			options: '=',
			toggleHeader: '=',
			toggleWidth: '=',
			optionHeaders: '=',
			callback: '&'
		}
	});