angular.module('freedomsworn')
	.directive('fsDropToggle', function(){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				options: '='
			},
			templateUrl: paths.fsDropToggle.views+'fs-drop-toggle.ng.html',
			link: function(scope, element, attrs){
				
				scope.toggleSelect = function(selection){
					scope.options[selection] = !scope.options[selection];
				};
				
			}
		}
	});