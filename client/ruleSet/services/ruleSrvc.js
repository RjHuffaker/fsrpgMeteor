angular.module('freedomsworn')
	.factory('ruleSrvc', function(){
		return {
			current: {},
			evalRule: function(rule, object){
				console.log(this.current);
				console.log(this.current.rules[rule]);
			}
		};
	});