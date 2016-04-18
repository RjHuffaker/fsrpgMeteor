angular.module('freedomsworn')
	.directive('fitContent', function(){
		return {
			restrict: 'A',
			scope: false,
			link: function(scope, element, attrs){
				
				var reduceText = function(){
					setTimeout(
						function(){
							var fontSize = parseInt(element.css('font-size'));
				//			console.log('Measure: '+element[0].offsetHeight+' / ' + element.parent()[0].offsetHeight);
							while( element[0].offsetHeight > element.parent()[0].offsetHeight && fontSize >= 6 ){
								fontSize--;
								element.css('font-size', fontSize + 'px' );
				//				console.log('Reducing: '+element[0].offsetHeight+' / ' + parseInt(element.css('font-size')));
							}
						},
					25);
				};
				
				scope.$watch(
					function(){
						return element[0].offsetHeight;
					},
					function(newValue, oldValue){
						if(newValue > oldValue){
							reduceText();
						}
					}
				);
				
				reduceText();
			}
		};
	});