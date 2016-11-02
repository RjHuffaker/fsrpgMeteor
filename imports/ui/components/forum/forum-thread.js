import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './forum-thread.html';

class ForumThread {
	constructor($scope, $reactive, $stateParams, $rootScope) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.subscribe('forumCategories');
		
		this.subscribe('forumTopics');
		
		this.subscribe('forumThreads');
		
		this.subscribe('forumPosts');
		
		this.helpers({
			category(){
				return ForumCategories.findOne({_id: this.getReactively('topic.categoryId')});
			},
			topic(){
				return ForumTopics.findOne({_id: this.getReactively('thread.topicId')});
			},
			thread(){
				return ForumThreads.findOne({_id: $stateParams.threadId});
			},
			posts(){
				return ForumPosts.find({threadId: $stateParams.threadId});
			}
		});
		
		this.addPost = function(){
			this.newPost.timestamp = Chronos.now();
			this.newPost.threadId = this.getReactively('thread._id');
			this.newPost.userId = $rootScope.currentUser.userId;
			this.newPost.username = $rootScope.currentUser.username;
			ForumPosts.insert(this.newPost, function(error, result){
				if(error){
					console.log(error);
				} else if(result){
					$scope.forumThread.reset();
				}
			});
		};
		
		this.deletePost = function(postId){
			ForumPosts.remove(postId);
		};
		
		this.reset = function(){
			this.newPost = {};
		};
		
	}
}

const name = 'forumThread';

// create a module
export default angular.module(name, [
  angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: ForumThread
	});