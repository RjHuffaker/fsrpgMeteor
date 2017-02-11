angular.module('freedomsworn')
	.component('ruleSetEdit', {
		templateUrl: '/client/ruleSet/components/rule-set-edit.html',
		controllerAs: 'vm',
		controller($rootScope, $scope, $reactive, $stateParams, $location, ruleSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('ruleSets');
			
			this.ruleSrvc = ruleSrvc;
			
			this.helpers({
				ruleSet(){
					return RuleSets.findOne({_id: $stateParams.ruleSetId});
				}
			});
			
			this.editRuleSet = function(ruleSet){
				ruleSet.lastModified = new Date();
				
				var _ruleSet = angular.copy(ruleSet);
				
				delete _ruleSet._id;
				
				RuleSets.update({
					_id: ruleSet._id
				}, { $set: _ruleSet });
				
			};
			
			this.testObject = {
				var1: 1,
				var2: 2,
				var3: 3
			};
			
			this.newRule = {};
			
			this.addNewRule = function(ruleSet, rule){
				ruleSet.rules[rule.name] = rule;
				console.log(ruleSet);
				this.newRule = {};
			};
			
			this.deleteRule = function(ruleSet, rule){
				delete ruleSet.rules[rule];
			};
			
			this.newTemplate = {};
			
			this.addNewTemplate = function(ruleSet, template){
				ruleSet.templates[template.name] = template;
				console.log(ruleSet);
				this.newTemplate = {};
			};
			
			this.deleteTemplate = function(ruleSet, template){
				delete ruleSet.templates[template];
			};
			
			this.testFunction = function(){
				console.log(Session);
			};
			
		}
	});