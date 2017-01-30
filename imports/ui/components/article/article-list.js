import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './article-list.html';

class ArticleList {
	constructor($rootScope, $scope, $reactive, $stateParams, $location, $timeout) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.subscribe('articles');
		
		this.helpers({
			itemList(){
				return Articles.find({});
			}
		});
		
		this.currentItem = '';
		
		this.selectItem = function(item){
			this.currentItem = item;
			console.log(item);
		};
		
		this.orderBy = 'title';
		
		this.reverse = false;
		
		this.toggleOrder = function(column){
			if(this.orderBy !== column){
				this.orderBy = column;
				this.reverse = false;
			} else {
				this.reverse = !this.reverse;
			}
		};
		
		this.deleteItem = function(item){
			Articles.remove(item._id);
			this.currentItem = '';
		};
		
	}
}

const name = 'articleList';

// create a module
export default angular.module(name, [
	angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: ArticleList
	});