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
					var panelContent = dropdownPanel.children()[0];
					var contentHeight = panelContent.offsetHeight;
					var contentWidth = panelContent.offsetWidth;
					
					var toggleHeight = dropdownToggle[0].offsetHeight;
					var toggleWidth = dropdownToggle[0].offsetWidth;
					
					//TODO: Customize coordinates of dropdownPanel according to left/right/top/bottom class variable(s).
					
					console.log('toggleShow');
					console.log(dropdownToggle);
					console.log(toggleHeight);
					console.log(toggleWidth);
					
					if(!dropdownPanel.hasClass('show-panel')){
						dropdownPanel.height(contentHeight);
						dropdownPanel.width(contentWidth);
						dropdownPanel.addClass('show-panel');
						toggleHideListener(true);
					} else {
						dropdownPanel.height(0);
						dropdownPanel.removeClass('show-panel')
						toggleHideListener(false);
					}
					scope.$digest();
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
					
					toggleShow(event);
					toggleHideListener(false);
				};
				
				initialize();
				
			}
		};
	}]);