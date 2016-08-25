angular.module('freedomsworn')
	.directive('fsNumpickerHover', function($timeout, $interval){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				numvalue: '=',
				numvaluemin: '=',
				numvaluemax: '=',
				numincrement: '=',
				numdefault: '=',
				numdelay: '=',
				numcallback: '&'
			},
			templateUrl: paths.fsNumpicker.views+'fs-numpicker-hover.ng.html',
			link: function(scope, element, attrs){
				
				var mouseCounter = {};
				
				var increment = 1;
				
				var intervalDelay = scope.numdelay;
				
				scope.numpickerShown = false;
				
				scope.onMouseOver = function(){
					scope.numpickerShown = true;
				};
				
				scope.onMouseLeave = function(){
					scope.numpickerShown = false;
				};
				
				scope.decreaseDown = function(){
					if(isNaN(scope.numvalue)) scope.numvalue = scope.numdefault;
					if(scope.numvalue <= scope.numvaluemin) return;
					
					scope.numvalue -= scope.numincrement ? scope.numincrement : 1;
					
					scope.numvalue = round(scope.numvalue, 1);
					mouseCounter = $timeout(decreaseValue, intervalDelay);
				};
				
				scope.increaseDown = function(){
					if(isNaN(scope.numvalue)) scope.numvalue = scope.numdefault;
					if(scope.numvalue >= scope.numvaluemax) return;
					
					scope.numvalue += scope.numincrement ? scope.numincrement : 1;
					
					scope.numvalue = round(scope.numvalue, 1);
					mouseCounter = $timeout(increaseValue, intervalDelay);
				};
				
				scope.mouseUp = function(){
					intervalDelay = scope.numdelay;
					increment = 1;
					if(mouseCounter){
						$timeout.cancel(mouseCounter);
					}
					if(scope.numcallback) scope.numcallback();
				};
				
				var decreaseValue = function(){
					if(scope.numvalue <= scope.numvaluemin) return;
					if(intervalDelay > 10){
						intervalDelay = intervalDelay * 0.9;
					}
					
					scope.numvalue -= scope.numincrement ? scope.numincrement : 1;
					mouseCounter = $timeout(decreaseValue, intervalDelay);
					if(scope.numcallback) scope.numcallback();
				};
				
				var increaseValue = function(){
					if(scope.numvalue >= scope.numvaluemax) return;
					if(intervalDelay > 20){
						intervalDelay -= 20;
					}
					
					scope.numvalue += scope.numincrement ? scope.numincrement : 1;
					mouseCounter = $timeout(increaseValue, intervalDelay);
					if(scope.numcallback) scope.numcallback();
				};
				
				var round = function(value, decimals) {
					return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
				};
				
			}
		};
	});