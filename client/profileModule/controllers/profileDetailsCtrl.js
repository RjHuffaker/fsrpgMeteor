angular.module("freedomsworn")
	.controller("ProfileDetailsCtrl", 
		function($scope, $reactive){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('users');
			
			this.helpers({
				user(){
					return Accounts.user();
				},
				users(){
					return Meteor.users.find();
				}
			});
			
			this.saveProfile = function(){
				
				console.log(this.user);
				
				//Meteor.call('userUpdate', this.user._id, this.user);
				
				Meteor.users.update(Meteor.userId(), {
					$set: {
						profile: this.user.profile
					}
				});
				
			};
			
		});