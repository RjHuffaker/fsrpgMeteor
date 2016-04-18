angular.module("freedomsworn")
	.controller("FeatureDeckListCtrl", ['$scope', '$rootScope', '$meteor', '$stateParams', '$location', 'featureBread',
		function($scope, $rootScope, $meteor, $stateParams, $location, featureBread){
			
			featureBread.browse();
			
			$scope.featureBread = featureBread;
			
		}]);