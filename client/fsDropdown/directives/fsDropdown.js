angular.module('freedomsworn')
	.directive('fsDropdown', ['$document', '$timeout', function($document, $timeout){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){
				
				var dropdownToggle;
				
				var dropdownPanel;
				
				var showHandler;
				
				var panelShown = false;
				
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
					if(dropdownPanel.hasClass('ng-hide')){
						dropdownPanel.removeClass('ng-hide');
						toggleHideListener(true);
					} else {
						dropdownPanel.addClass('ng-hide');
						toggleHideListener(false);
					}
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
					dropdownPanel.addClass('ng-hide');
					toggleHideListener(false);
				};
				
				initialize();
				
			}
		};
	}]);