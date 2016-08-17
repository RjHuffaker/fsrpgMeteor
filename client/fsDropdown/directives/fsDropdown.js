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
					var elem = event.target;
					for(elem; elem; elem = elem.parentNode){
						if(elem.id === attrs.id){
							if(angular.element(elem).hasClass('keep-open')) return;
						}
					}
					
					hidePanel();
				};
				
				var showPanel = function(){
					var panelContent = dropdownPanel.children()[0];
					var contentHeight = panelContent.offsetHeight;
					var contentWidth = panelContent.offsetWidth;
					
					var toggleHeight = dropdownToggle[0].offsetHeight;
					var toggleWidth = dropdownToggle[0].offsetWidth;
					
					//attrs.id = Random.id();
					
					dropdownToggle.addClass('panel-shown');
					
					if(dropdownToggle.offset().top * 2 > $window.innerHeight && !element.hasClass('open-down')){
						dropdownPanel.addClass('anchor-top');
						dropdownPanel.removeClass('anchor-bottom');
						dropdownPanel.css('margin-top', -toggleHeight+'px');
						dropdownPanel.css('margin-top', -(toggleHeight+contentHeight)+'px');
					} else {
						dropdownPanel.addClass('anchor-bottom');
						dropdownPanel.removeClass('anchor-top');
						dropdownPanel.css('margin-top', '0');
					}
					
					if(element.hasClass('span-width')){
						dropdownPanel.width(toggleWidth);
					} else {
						dropdownPanel.width(contentWidth);
					}
					
					if(element.hasClass('anchor-right')){
						dropdownPanel.css('margin-left', -(contentWidth-toggleWidth)+'px');
					}
					
					if(angular.isFunction(scope.openCallback)) scope.openCallback();
					
					dropdownPanel.height(contentHeight);
					dropdownPanel.addClass('show-panel');
					dropdownToggle.addClass('panel-shown');
					toggleHideListener(true);
				};
				
				var hidePanel = function(){
					var toggleHeight = element[0].offsetHeight;
					
					if(dropdownToggle.offset().top * 2 > $window.innerHeight && !element.hasClass('open-down')){
						dropdownPanel.addClass('anchor-top');
						dropdownPanel.removeClass('anchor-bottom');
						dropdownPanel.css('margin-top', -toggleHeight+'px');
					} else {
						dropdownPanel.addClass('anchor-bottom');
						dropdownPanel.removeClass('anchor-top');
						dropdownPanel.css('margin-top', '0');
					}
					
					if(angular.isFunction(scope.closeCallback)) scope.closeCallback();
					
					dropdownPanel.height(0);
					dropdownPanel.removeClass('show-panel')
					dropdownToggle.removeClass('panel-shown');
					toggleHideListener(false);
				};
				
				initialize();
				
			}
		};
	});