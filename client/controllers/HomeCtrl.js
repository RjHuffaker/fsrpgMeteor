angular.module("freedomsworn")
	.controller("HomeCtrl", function($scope, shownColumns){
			'ngInject';
			
			$scope.testArray = [];
			
			$scope.shownColumns = shownColumns;
			
		});