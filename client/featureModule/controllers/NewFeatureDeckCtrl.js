angular.module("freedomsworn")
	.controller("NewFeatureDeckCtrl",
		function($scope, $meteor, $stateParams, $location, CoreVars, dataSrvc, featureBread){
			'ngInject';
			
			$scope.CoreVars = CoreVars;
			
			$scope.dataSrvc = dataSrvc;
			
			$scope.featureBread = featureBread;
			
		});