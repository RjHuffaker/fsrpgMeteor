angular.module('freedomsworn')
	.directive('fsDropdown', function($document, $parse, $timeout, $window){
		'ngInject';

		return {
			restrict: 'A',
			scope: {
				openCallback: '=',
				closeCallback: '='
			},
			link: function(scope, element, attrs){
				
				var dropdownToggle;
				
				var dropdownPanel;
				
				var opencallback;
				var closecallback;
				
				var showHandler = null;
				
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
						dropdownToggle.on('click', toggleShow);
					} else {
						dropdownToggle.off('click', toggleShow);
						$document.off('click', toggleHide);
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
					var l = exemptList.length;
					for(elem = event.target; elem; elem = elem.parentNode){
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
					
					var toggleHeight = dropdownToggle[0].offsetHeight;
					var toggleWidth = dropdownToggle[0].offsetWidth;
					
					if(dropdownToggle.offset().top * 2 > $window.innerHeight){
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
					
					if(angular.isFunction(scope.openCallback)) scope.openCallback();
					
					dropdownPanel.height(contentHeight);
					dropdownPanel.addClass('show-panel');
					toggleHideListener(true);
				};
				
				var hidePanel = function(){
					var toggleHeight = element[0].offsetHeight;
					
					if(dropdownToggle.offset().top * 2 > $window.innerHeight){
						dropdownPanel.addClass('anchor-top');
						dropdownPanel.removeClass('anchor-bottom');
						dropdownPanel.css('margin-top', -toggleHeight+'px');
					} else {
						dropdownPanel.addClass('anchor-bottom');
						dropdownPanel.removeClass('anchor-top');
					}
					
					if(angular.isFunction(scope.closeCallback)) scope.closeCallback();
					
					dropdownPanel.height(0);
					dropdownPanel.removeClass('show-panel')
					toggleHideListener(false);
				};
				
				initialize();
				
			}
		};
	});