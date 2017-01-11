import angular from 'angular';
import angularMeteor from 'angular-meteor';


import { name as ArticleList } from '/imports/ui/components/article/article-list';
import { name as ArticleView } from '/imports/ui/components/article/article-view';
import { name as ArticleEdit } from '/imports/ui/components/article/article-edit';

const name = 'article';

// create a module
export default angular.module(name, [
  angularMeteor, ArticleList, ArticleView, ArticleEdit
]);