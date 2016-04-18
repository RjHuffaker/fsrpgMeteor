angular.module("freedomsworn")
	.controller("PcDeckListCtrl", ['$scope', '$rootScope', '$meteor', '$stateParams', '$location', 'pcBread',
		function($scope, $rootScope, $meteor, $stateParams, $location, pcBread){
			
			pcBread.browse();
			
			$scope.pcBread = pcBread;
			
		}]);