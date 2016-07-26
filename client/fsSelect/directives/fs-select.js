angular.module('freedomsworn')
	.directive('fsSelect', function(){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				selection: '=',
				options: '=',
				selectHeader: '=',
				selectionHeaders: '=',
				selectionArray: '=',
				callback: '&'
			},
			templateUrl: paths.fsSelect.views+'fs-select.ng.html',
			link: function(scope, element, attrs){
				
				scope.selectOption = function(selection){
					var option = selection._id ? selection._id : selection;
					
					if(scope.selectionArray){
						var arrayIndex = scope.selectionArray.indexOf(option);
						if(arrayIndex > -1) {
							var newarray = scope.selectionArray.splice(arrayIndex, 1);
						} else {
							scope.selectionArray.push(option);
						}
					} else {
						scope.selection = option;
					}
					//scope.callback();
					
					scope.$eval(scope.callback());
				};
				
				scope.showSelected = function(selection){
					var option = selection._id ? selection._id : selection;
					
					if(scope.selectionArray){
						return scope.selectionArray.indexOf(option) > -1;
					} else {
						return angular.equals(option, scope.selection);
					}
				};
				
			}
		}
	});