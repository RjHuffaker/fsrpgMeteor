angular.module('freedomsworn')
	.component('fsTableNumpicker', {
		templateUrl: '/client/fsTable/components/fs-table-numpicker.html',
		controllerAs: 'vm',
		bindings: {
			columnShown: '=',
			numvalue: '=',
			numvaluemin: '=',
			numvaluemax: '=',
			numincrement: '=',
			numdefault: '=',
			numdelay: '=',
			callback: '='
		},
		controller($scope, $reactive, dataSrvc) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.dataSrvc = dataSrvc;
			
			var mouseCounter = {};
			
			var intervalDelay = this.numdelay;
			
			this.decreaseDown = function(){
				if(isNaN(this.numvalue)) this.numvalue = this.numdefault;
				if(this.numvalue <= this.numvaluemin) return;
				
				this.numvalue -= this.numincrement ? this.numincrement : 1;
				
				this.numvalue = round(this.numvalue, 1);

				mouseCounter = Meteor.setTimeout(decreaseValue, intervalDelay);
			};
			
			this.increaseDown = function(){
				if(isNaN(this.numvalue)) this.numvalue = this.numdefault;
				if(this.numvalue >= this.numvaluemax) return;
				
				this.numvalue += this.numincrement ? this.numincrement : 1;
				
				this.numvalue = round(this.numvalue, 1);
				
				mouseCounter = Meteor.setTimeout(increaseValue, intervalDelay);
			};
			
			this.onChange = function(value){
				if(this.callback) this.callback(value);
			};
			
			var decreaseValue = function(){
				if(this.numvalue <= this.numvaluemin) return;
				if(intervalDelay > 10){
					intervalDelay = intervalDelay * 0.9;
				}
				
				this.numvalue -= this.numincrement ? this.numincrement : 1;
				mouseCounter = Meteor.setTimeout(decreaseValue, intervalDelay);
			};
			
			var increaseValue = function(){
				if(this.numvalue >= this.numvaluemax) return;
				if(intervalDelay > 20){
					intervalDelay -= 20;
				}
				
				this.numvalue += this.numincrement ? this.numincrement : 1;
				mouseCounter = Meteor.setTimeout(increaseValue, intervalDelay);
			};
			
			var round = function(value, decimals) {
				return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
			};

			this.mouseUp = function(){
				intervalDelay = this.numdelay;
				if(mouseCounter){
					Meteor.clearTimeout(mouseCounter);
				}
			};
			
			
		}
	});