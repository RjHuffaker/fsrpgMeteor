import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './forum-topic.html';

class ForumTopic {
	constructor($scope, $reactive, $stateParams) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.subscribe('forumCategories');
		
		this.subscribe('forumTopics');
		
		this.subscribe('forumThreads');
		
		this.helpers({
			category(){
				return ForumCategories.findOne({_id: this.getReactively('topic.categoryId')});
			},
			topic(){
				return ForumTopics.findOne({_id: $stateParams.topicId});
			},
			threads(){
				return ForumThreads.find({topicId: $stateParams.topicId});
			}
		});
		
		this.addThread = function(){
			ForumThreads.insert(this.newThread, function(error, result){
				if(error){
					console.log(error);
				} else if(result){
					$scope.vm.reset();
				}
			});
		};
		
		this.deleteThread = function(threadId){
			ForumThreads.remove(threadId);
		};
		
		this.reset = function(){
			this.newThread = {
				topicId: this.getReactively('topic._id')
			};
		};
		
		this.reset();
		
	}
}

const name = 'forumTopic';

// create a module
export default angular.module(name, [
  angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: ForumTopic
	});