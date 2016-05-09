angular.module('freedomsworn')
	.directive('descriptionInput', ['$parse', function($parse){
		return {
			restrict: 'A',
			scope: {
              contenttext: '=',
              defaultcontent: '=',
              panel: '='
            },
			templateUrl: paths.generalModule.views+'description-input.ng.html',
			link: function(scope, element, attrs){
				
				scope.onChangeContent = function(){
					scope.contenttext = element.find('textarea')[0].value;
				};
				
			}
		};
	}])
	.directive('definitionInput', [function(){
		return {
			restrict: 'A',
			scope: {
              leadertext: '=',
              defaultleader: '=',
              contenttext: '=',
              defaultcontent: '=',
              panel: '='
            },
			templateUrl: paths.generalModule.views+'definition-input.ng.html',
			link: function(scope, element, attrs){
				
				scope.onChangeLeader = function(){
					scope.leadertext = element.find('input')[0].value;
				};
				
				scope.onChangeContent = function(){
					scope.contenttext = element.find('textarea')[0].value;
				};
				
			}
		};
	}]);