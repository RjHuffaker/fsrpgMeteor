import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as ForumCategory } from '/imports/ui/components/forum/forum-category';
import { name as ForumTopic } from '/imports/ui/components/forum/forum-topic';
import { name as ForumThread } from '/imports/ui/components/forum/forum-thread';

import templateUrl from './forum.html';

class Forum {
	constructor($scope, $reactive) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.subscribe('forumCategories');
		
		this.helpers({
			categories(){
				return ForumCategories.find({});
			}
		});
		
		this.newCategory = {};
		
		this.addCategory = function(){
			ForumCategories.insert(this.newCategory, function(error, result){
				if(error){
					console.log(error);
				} else if(result) {
					this.newCategory = {};
					
				}
			});
		};
		
		this.deleteCategory = function(categoryId){
			ForumCategories.remove(categoryId);
		};
		
	}
}

const name = 'forum';

// create a module
export default angular.module(name, [
  angularMeteor, ForumCategory, ForumTopic, ForumThread
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: Forum
	});