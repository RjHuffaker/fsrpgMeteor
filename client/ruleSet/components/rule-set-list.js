angular.module('freedomsworn')
	.component('ruleSetList', {
		templateUrl: '/client/ruleSet/components/rule-set-list.html',
		controllerAs: 'vm',
		controller($rootScope, $scope, $reactive, $meteor, $location, $timeout, ruleSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('ruleSets');
			
			this.ruleSrvc = ruleSrvc;
			
			this.helpers({
				itemList(){
					return RuleSets.find({});
				}
			});
			
			this.selectItem = function(item){
				this.currentItem = item;
				console.log(item);
			};
			
			this.orderBy = 'title';
			
			this.reverse = false;
			
			this.loadRuleSet = function(ruleSet){
				
				Session.set('ruleSet', ruleSet);
				Meteor.user.ruleSet = ruleSet;
			};
			
			this.toggleOrder = function(column){
				if(this.orderBy !== column){
					this.orderBy = column;
					this.reverse = false;
				} else {
					this.reverse = !this.reverse;
				}
			};
			
			this.deleteItem = function(item){
				RuleSets.remove(item._id);
				this.currentItem = '';
			};
			
		}
	});