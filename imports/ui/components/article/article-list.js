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
		
		this.addItem = function(){
			
			var newItem = {
				title: 'Title goes here.',
				content: 'Content goes here.'
			};
			
			newItem._id = Random.id();
			newItem.owner = $rootScope.currentUser._id;
			newItem.createdOn = new Date();
			newItem.lastModified = new Date();
			
			Articles.insert(newItem, function(error, result){
				if(error){
					console.log(error);
				} else if(result) {
					$timeout(function(){
						$location.path('/articleEdit/'+result);
					}, 0);
				}
			});
			
		};
		
		this.deleteItem = function(item){
			Articles.remove(item._id);
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