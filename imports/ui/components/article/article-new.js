import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './article-new.html';

class ArticleNew {
	constructor($scope, $element, $rootScope, $reactive, $meteor, $stateParams, $location, $timeout, modalSrvc) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.subscribe('Articles');
		
		this.newItem = {
			title: 'Title goes here.',
			content: 'Content goes here.'
		};
		
		this.addNewItem = function(newItem){
			
			newItem._id = Random.id();
			newItem.owner = $rootScope.currentUser._id;
			newItem.createdOn = new Date();
			newItem.lastModified = new Date();
			
			Articles.insert(newItem, function(error, result){
				if(error){
					console.log(error);
				} else if(result) {
					$timeout(function(){
						$location.path('/articleView/'+result);
					}, 0);
				}
			});
			
			modalSrvc.current = {};
			
		};
		
		this.cancel = function(){
			modalSrvc.current = {};
		};
		
	}
}

const name = 'articleNew';

// create a module
export default angular.module(name, [
	angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: ArticleNew
	});