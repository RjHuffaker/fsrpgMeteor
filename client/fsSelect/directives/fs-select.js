angular.module('freedomsworn')
	.directive('fsSelect', function(){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				fsSelect: '=',
				selection: '=',
				options: '=',
				toggleHeader: '=',
				optionHeaders: '=',
				callback: '&'
			},
			templateUrl: paths.fsSelect.views+'fs-select.ng.html',
			link: function(scope, element, attrs){
				
				scope.dropdownId = Random.id();
				
				scope.selectOption = function(selection){
					if(selection){
						if(scope.fsSelect === 'array'){
							var _index = scope.selection.indexOf(selection);
							if(_index > -1) {
								var newarray = scope.selection.splice(_index, 1);
							} else {
								scope.selection.push(selection);
							}
						} else if(scope.fsSelect === 'id'){
							var _index = scope.selection.indexOf(selection._id);
							if(_index > -1) {
								var newarray = scope.selection.splice(_index, 1);
							} else {
								scope.selection.push(selection._id);
							}
						} else if(scope.fsSelect === 'boolean'){
							scope.options[selection] = !scope.options[selection];
						} else {
							scope.selection = selection;
						}
					} else if(scope.fsSelect === undefined){
						scope.selection = '';
					}
					
					if(scope.callback) scope.callback();
					
					scope.$eval(scope.callback());
				};
				
				scope.showSelected = function(selection){
					if(!scope.selection) return;
					if(scope.fsSelect === 'array'){
						return scope.selection.indexOf(selection) > -1;
					} else if(scope.fsSelect === 'id'){
						return scope.selection.indexOf(selection._id) > -1;
					} else {
						return angular.equals(selection, scope.selection);
					}
				};
				
			}
		}
	});