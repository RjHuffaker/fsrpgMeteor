angular.module('freedomsworn')
	.directive('fsNumpicker', function($timeout, $interval){
		'ngInject';

		return {
			restrict: 'A',
			scope: {
				numvalue: '=',
				numvaluemin: '=',
				numvaluemax: '=',
				numdefault: '=',
				numdelay: '=',
				callback: '='
			},
			templateUrl: paths.fsNumpicker.views+'fs-numpicker.ng.html',
			link: function(scope, element, attrs){
				
				var mouseCounter = {};
				
				var increment = 1;
				
				var intervalDelay = scope.numdelay;
				
				scope.decreaseDown = function(){
					if(isNaN(scope.numvalue)) scope.numvalue = scope.numdefault;
					// if(scope.numvaluemin)
					if(scope.numvalue <= scope.numvaluemin) return;
					scope.numvalue--;
					mouseCounter = $timeout(decreaseValue, intervalDelay);
				};
				
				scope.increaseDown = function(){
					if(isNaN(scope.numvalue)) scope.numvalue = scope.numdefault;
					if(scope.numvaluemax)
					if(scope.numvalue >= scope.numvaluemax) return;
					scope.numvalue++;
					mouseCounter = $timeout(increaseValue, intervalDelay);
				};
				
				scope.onChange = function(value){
					if(scope.callback) scope.callback(value);
				};
				
				var decreaseValue = function(){
					// if(scope.numvaluemin)
					if(scope.numvalue <= scope.numvaluemin) return;
					if(intervalDelay > 10){
						intervalDelay = intervalDelay * 0.9;
					}
					
					scope.numvalue -= increment;
					mouseCounter = $timeout(decreaseValue, intervalDelay);
				};
				
				var increaseValue = function(){
					if(scope.numvaluemax)
					if(scope.numvalue >= scope.numvaluemax) return;
					if(intervalDelay > 20){
						intervalDelay -= 20;
					}
					
					scope.numvalue++;
					mouseCounter = $timeout(increaseValue, intervalDelay);
				};
				
				scope.mouseUp = function(){
					intervalDelay = scope.numdelay;
					increment = 1;
					if(mouseCounter){
						$timeout.cancel(mouseCounter);
					}
				};
			}
		};
	});