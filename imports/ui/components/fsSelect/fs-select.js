import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as RecursiveList } from '/imports/ui/components/fsSelect/recursive-list';

import templateUrl from './fs-select.html';

class FsSelect {
	constructor($scope, $reactive) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.dropdownId = Random.id();
		
		this.selectOption = function(selection){
			console.log('select option', selection);
			if(selection){
				if(this.fsSelect === 'array'){
					var _index = this.selection.indexOf(selection);
					if(_index > -1) {
						var newarray = this.selection.splice(_index, 1);
					} else {
						this.selection.push(selection);
					}
				} else if(this.fsSelect === 'id'){
					var _index = this.selection.indexOf(selection._id);
					if(_index > -1) {
						var newarray = this.selection.splice(_index, 1);
					} else {
						this.selection.push(selection._id);
					}
				} else if(this.fsSelect === 'boolean'){
					this.options[selection] = !this.options[selection];
				} else if(this.fsSelect === 'nested'){
					selection.shown = !selection.shown;
				} else {
					this.selection = selection;
				}
			} else if(this.fsSelect === undefined){
				this.selection = '';
			}
			
			if(this.callback) this.callback();
			
			$scope.$eval(this.callback());
		};
		
		this.showSelected = function(selection){
			if(!this.selection) return;
			if(this.fsSelect === 'array'){
				return this.selection.indexOf(selection) > -1;
			} else if(this.fsSelect === 'id'){
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
			optionHeaders: '=',
			callback: '&'
		}
	});