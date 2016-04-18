angular.module("freedomsworn")
	.controller("NavCtrl", ['$scope', '$meteor', '$location', 'pcBread', 'featureBread', 'modalSrvc',
	function($scope, $meteor, $location, pcBread, featureBread, modalSrvc){
		
    $scope.modalSrvc = modalSrvc;
    
    $scope.error = '';
    
    $scope.checkCurrentPath = function(path){
      return $location.path().indexOf(path) > -1;
    };
    
    $scope.register = function () {
      $meteor.createUser($scope.credentials).then(
        function () {
          console.log('new user registered');
        },
        function (err) {
          $scope.credentials.username = '';
          $scope.credentials.password = '';
          $scope.registerError = 'Registration Error';
        }
      );
    };
    
    $scope.login = function () {
      $meteor.loginWithPassword($scope.credentials.username, $scope.credentials.password).then(
        function () {
          console.log('user logged in');
        },
        function (err) {
          $scope.credentials.username = '';
          $scope.credentials.password = '';
          $scope.loginError = 'Login Error';
        }
      );
    };
		
		$scope.logout = function(){
			$meteor.logout().then(
        function () {
          console.log('user logged out');
        },
        function (err) {
          $scope.logoutError = 'Logout Error';
        }
      );
		};
		
    $scope.editPc = function(){
      pcBread.edit();
    };
    
    $scope.editFeatureDeck = function(){
      featureBread.edit();
    };
    
	}]);