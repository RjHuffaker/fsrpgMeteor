angular.module('freedomsworn')
	.directive('fsDropdown', ['$document', '$timeout', '$window', function($document, $timeout, $window){
		return {
			restrict: 'A',
			scope: true,
			link: function(scope, element, attrs){
				
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
						if(showHandler) showHandler();
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
					
					if(!dropdownPanel.hasClass('show-panel')){
						showPanel();
					} else {
						hidePanel();
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
					
					hidePanel()
				};
				
				var showPanel = function(){
					var panelContent = dropdownPanel.children()[0];
					var contentHeight = panelContent.offsetHeight;
					var contentWidth = panelContent.offsetWidth;
					
					var toggleHeight = element[0].offsetHeight;
					var toggleWidth = element[0].offsetWidth;
					
					if(element.offset().top * 2 > $window.innerHeight){
						dropdownPanel.addClass('anchor-top');
						dropdownPanel.removeClass('anchor-bottom');
						dropdownPanel.css('margin-top', -toggleHeight+'px');
						dropdownPanel.css('margin-top', -(toggleHeight+contentHeight)+'px');
					} else {
						dropdownPanel.addClass('anchor-bottom');
						dropdownPanel.removeClass('anchor-top');
					}
					
					if(attrs.spanWidth){
						dropdownPanel.width(toggleWidth);
					} else {
						dropdownPanel.width(contentWidth);
					}
					
					dropdownPanel.height(contentHeight);
					dropdownPanel.addClass('show-panel');
					toggleHideListener(true);
					
				};
				
				var hidePanel = function(){
					var toggleHeight = element[0].offsetHeight;
					
					if(element.offset().top * 2 > $window.innerHeight){
						dropdownPanel.css('margin-top', -toggleHeight+'px');
					}
					
					dropdownPanel.height(0);
					dropdownPanel.removeClass('show-panel')
					toggleHideListener(false);
				};
				
				initialize();
				
			}
		};
	}]);