import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './article-edit.html';

class ArticleEdit {
	constructor($scope, $reactive, $stateParams) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.subscribe('articles');
		
		this.helpers({
			article(){
				return Articles.findOne({_id: $stateParams.articleId});
			}
		});
		
		this.editArticle = function(article){
			
			console.log(article);
			
			article.lastModified = new Date();
			
			var _article = angular.copy(article);
			
			delete _article._id;
			
			console.log(_article);
			
			Articles.update({
				_id: article._id
			}, { $set: _article });
			
		};
		
		
	}
}

const name = 'articleEdit';

// create a module
export default angular.module(name, [
  angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: ArticleEdit
	});