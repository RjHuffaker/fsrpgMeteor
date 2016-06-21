angular.module('freedomsworn')
	.directive('elasticText', function($timeout){
		'ngInject';
		
		return{
			restrict: 'A',
			link: function(scope, element, attrs){
				
				var resizeArea = function(){
					setTimeout(
						function(){
							element[0].style.height = element[0].scrollHeight + 'px';
						},
					25);
				};
				
				scope.$watch(
					function(){
						return element[0].scrollHeight;
					},
					function(newValue, oldValue){
						if(newValue !== oldValue){
							resizeArea();
						}
					}
				);
				
				resizeArea();
			}
		};
	});