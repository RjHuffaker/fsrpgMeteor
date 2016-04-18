angular.module("freedomsworn")
	.controller("FeatureDeckDetailsCtrl", ['$scope', '$meteor', '$stateParams', '$location', 'CoreVars', 'dataSrvc', 'featureBread',
		function($scope, $meteor, $stateParams, $location, CoreVars, dataSrvc, featureBread){
			
			$scope.CoreVars = CoreVars;
			
			$scope.dataSrvc = dataSrvc;
			
			featureBread.read($stateParams.featureDeckId);
			
			$scope.featureBread = featureBread;
			
		}]);