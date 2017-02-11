angular.module('freedomsworn')
	.component('navBar', {
		templateUrl: '/client/navBarModule/components/nav-bar.html',
		controllerAs: 'vm',
		controller($scope, $reactive, $meteor, $location, modalSrvc, ruleSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.modalSrvc = modalSrvc;
			
			this.ruleSrvc = ruleSrvc;
			
			this.error = '';
			
			this.credentials = {};
			
			this.register = function () {
				$meteor.createUser($scope.credentials).then(
					function () {
						console.log('new user registered');
					},
					function (err) {
						this.credentials.username = '';
						this.credentials.password = '';
						this.registerError = 'Registration Error';
					}
				);
			};
			
			this.login = function () {
				$meteor.loginWithPassword($scope.credentials.username, $scope.credentials.password).then(
					function () {
						console.log('user logged in');
					},
					function (err) {
						this.credentials.username = '';
						this.credentials.password = '';
						this.loginError = 'Login Error';
					}
				);
			};
			
			this.logout = function(){
				$meteor.logout().then(
					function () {
						console.log('user logged out');
					},
					function (err) {
						this.logoutError = 'Logout Error';
					}
				);
			};
			
			
			this.autorun(() => {
				this.ruleSet = Session.get('ruleSet');
			});
			
		}
	});