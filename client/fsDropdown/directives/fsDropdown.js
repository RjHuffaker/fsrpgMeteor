angular.module('freedomsworn')
	.directive('fsDropdown', ['$document', '$timeout', '$animate', function($document, $timeout, $animate){
		return {
			restrict: 'A',
			scope: true,
			link: function(scope, element, attrs){
				
				scope.hidePanel = true;
				
				var dropdownToggle;
				
				var dropdownPanel;
				
				var showHandler;
				
				var exemptList = ['keep-open', 'form', 'form-control', 'fs-dropdown-panel'];
				
				var toggleHideListener = function(enable){
					if(enable){
						$timeout(function(){
							$document.on('click', toggleHide);
							console.log('toggleHideListener');
						}, 0);
					} else {
						$document.off('click', toggleHide);
					}
				};
				
				var toggleListeners = function(enable){
					if(enable){
						showHandler = dropdownToggle.on('click', toggleShow);
					} else {
						showHandler();
						toggleHideListener(false);
					}
				};
				
				var initialize = function(){
					scope.$on('$destroy', onDestroy);
					dropdownToggle = angular.element(element.find(".fs-dropdown-toggle")[0]);
					dropdownPanel = angular.element(element.find(".fs-dropdown-panel")[0]);
					toggleListeners(true);
				};
				
				var onDestroy = function(enable){
					toggleListeners(false);
				};
				
				var toggleShow = function(event){
					
					//if(scope.hidePanel){
					if(dropdownPanel.hasClass('ng-hide')){
						//dropdownPanel.removeClass('ng-hide');
						//scope.hidePanel = false;
						$animate.removeClass(dropdownPanel, 'ng-hide');
						
						toggleHideListener(true);
					} else {
						//dropdownPanel.addClass('ng-hide');
						//scope.hidePanel = true;
						$animate.addClass(dropdownPanel, 'ng-hide');
						
						toggleHideListener(false);
					}
					
				};
				
				var toggleHide = function(event){
					console.log('toggleHide');
					var l = exemptList.length;
					for(elem = event.target; elem; elem = elem.parentNode) {
						if(elem.id === attrs.id){
							for(var i = 0; i < l; i++){
								if(angular.element(event.target).hasClass(exemptList[i])) return;
							}
						}
					}
					
					//scope.hidePanel = false;
					//dropdownPanel.addClass('ng-hide');
					$animate.addClass(dropdownPanel, 'ng-hide');
					
					
					toggleHideListener(false);
				};
				
				initialize();
				
			}
		};
	}]);