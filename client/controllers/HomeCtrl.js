angular.module("freedomsworn")
	.controller("HomeCtrl", function($scope, shownColumnsNested){
			'ngInject';
			
			$scope.testArray = [];
			
			$scope.shownColumns = shownColumnsNested;
			
		});