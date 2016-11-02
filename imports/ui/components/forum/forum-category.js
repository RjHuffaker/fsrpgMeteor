import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './forum-category.html';

class ForumCategory {
	constructor($scope, $reactive, $stateParams) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.subscribe('forumCategories');
		
		this.subscribe('forumTopics');
		
		this.helpers({
			categoryId(){
				return $stateParams.categoryId;
			},
			category(){
				return ForumCategories.findOne({_id: $stateParams.categoryId});
			},
			topics(){
				return ForumTopics.find({categoryId: $stateParams.categoryId});
			}
		});
		
		this.addTopic = function(){
			ForumTopics.insert(this.newTopic, function(error, result){
				if(error){
					console.log(error);
				} else if(result) {
					$scope.forumTopics.reset();
				}
			});
		};
		
		this.deleteTopic = function(topicId){
			ForumTopics.remove(topicId);
		};
		
		this.reset = function(){
			this.newTopic = {
				categoryId: this.getReactively('category._id')
			};
		};
		
		this.reset();
		
	}
}

const name = 'forumCategory';

// create a module
export default angular.module(name, [
  angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: ForumCategory
	});