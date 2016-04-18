angular.module("freedomsworn")
	.controller("HomeCtrl", ['$scope', '$meteor', '$stateParams', '$location', 'modalSrvc',
		function($scope, $meteor, $stateParams, $location, modalSrvc){
			
			$scope.deckType = $stateParams.deckType;
			
			$scope.modalSrvc = modalSrvc;
			
		}]);