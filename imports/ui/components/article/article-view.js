import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './article-view.html';

class ArticleView {
	constructor($scope, $reactive, $stateParams) {
		'ngInject';
		
		$reactive(this).attach($scope);
		
		this.subscribe('articles');
		
		this.helpers({
			article(){
				return Articles.findOne({_id: $stateParams.articleId});
			}
		});
		
	}
}

const name = 'articleView';

// create a module
export default angular.module(name, [
  angularMeteor
])
	.component(name, {
		templateUrl,
		controllerAs: 'vm',
		controller: ArticleView
	});