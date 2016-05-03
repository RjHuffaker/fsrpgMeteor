angular.module('freedomsworn')
	.directive('fsText', ['$document', '$timeout', '$animate', function($document, $timeout, $animate){
		return {
			restrict: 'A',
			scope: {
				model: '='
			},
			templateUrl: paths.fsText.views+'fs-text.ng.html',
			link: function(scope, element, attrs){
				
				scope.showPanel = false;
				
				var textToggle;
				
				var textPanel;
				
				var showHandler;
				
				var exemptList = ['keep-open', 'form', 'form-control', 'fs-dropdown-panel'];
				
				var toggleHideListener = function(enable){
					if(enable){
						$timeout(function(){
							$document.on('click', toggleHide);
						}, 0);
					} else {
						$document.off('click', toggleHide);
					}
				};
				
				var toggleListeners = function(enable){
					if(enable){
						showHandler = textToggle.on('click', toggleShow);
					} else {
						if(showHandler) showHandler();
						toggleHideListener(false);
					}
				};
				
				var initialize = function(){
					scope.$on('$destroy', onDestroy);
					textToggle = angular.element(element.find(".fs-text-toggle")[0]);
					textPanel = angular.element(element.find(".fs-text-panel")[0]);
					
					var toggleHeight = textToggle[0].offsetHeight;
					var toggleWidth = textToggle[0].offsetWidth;
					
					textPanel.height(toggleHeight);
					textPanel.width(toggleWidth);
					
					toggleListeners(true);
				};
				
				var onDestroy = function(enable){
					toggleListeners(false);
				};
				
				var toggleShow = function(event){
					
					if(!textPanel.hasClass('show-panel')){
						showPanel();
					} else {
						hidePanel();
					}
					scope.$digest();
				};
				
				var toggleHide = function(event){
					var l = exemptList.length;
					for(elem = event.target; elem; elem = elem.parentNode) {
						if(elem.id === attrs.id){
							for(var i = 0; i < l; i++){
								if(angular.element(event.target).hasClass(exemptList[i])) return;
							}
						}
					}
					
					hidePanel()
					scope.$digest();
				};
				
				var showPanel = function(){
					
					var toggleHeight = textToggle[0].offsetHeight;
					var toggleWidth = textToggle[0].offsetWidth;
					
					textPanel.height(toggleHeight);
					textPanel.width(toggleWidth);
					
					scope.showPanel = !scope.showPanel;
					
					
					textPanel.addClass('show-panel');
					toggleHideListener(true);
					
				};
				
				var hidePanel = function(){
					
					var toggleHeight = textToggle[0].offsetHeight;
					var toggleWidth = textToggle[0].offsetWidth;
					
					textPanel.height(toggleHeight);
					textPanel.width(toggleWidth);
					
					scope.showPanel = !scope.showPanel;
					
					textPanel.removeClass('show-panel')
					toggleHideListener(false);
				};
				
				initialize();
				
			}
		};
	}]);