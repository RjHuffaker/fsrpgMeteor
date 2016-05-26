angular.module('freedomsworn')
	.directive('fsBlockInput', [function(){
		return {
			restrict: 'A',
			scope: {
        centertext: '=',
        bullettext: '=',
        leadertext: '=',
        blocktext: '=',
        defaultcenter: '=',
       	defaultbullet: '=',
       	defaultblock: '=',
        panel: '=',
        id: '=fsBlockInput'
      },
			templateUrl: paths.fsBlockInput.views+'fs-block-input.ng.html',
			link: function(scope, element, attrs){
				
				scope.onChangeCenter = function(){
					scope.centertext = element.find('textarea')[0].value;
				};
				
				scope.onChangeBullet = function(){
					scope.bullettext = element.find('textarea')[0].value;
				};
				
				scope.onChangeBlock = function(){
					scope.blocktext = element.find('textarea')[0].value;
				};
				
				scope.onDropOpen = function(){
					element.find('textarea')[0].focus(); 
				};
				
			}
		};
	}]);