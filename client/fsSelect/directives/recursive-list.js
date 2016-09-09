angular.module('freedomsworn')
	.directive('recursiveList', function(){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				recursiveList: '=',
				recursiveClick: '&'
			},
			templateUrl: paths.fsSelect.views+'recursive-list.ng.html',
			link: function(scope, element, attrs){
				
				scope.itemClick = function(value){
					value.shown = !value.shown;
				};
			}	
		};
		
	});