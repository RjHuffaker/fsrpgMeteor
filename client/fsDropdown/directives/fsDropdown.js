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
				
				var panelContent;
				
				var heightHandler = null;
				
				var widthHandler = null;
				
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
						if(heightHandler) heightHandler();
						if(widthHandler) widthHandler();
					}
				};
				
				var initialize = function(){
					scope.$on('$destroy', onDestroy);
					dropdownToggle = angular.element(element.find(".fs-dropdown-toggle")[0]);
					dropdownPanel = angular.element(element.find(".fs-dropdown-panel")[0]);
					panelContent = dropdownPanel.children()[0];
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
				
				var getHeight = function(){
					return panelContent.offsetHeight;
				};
				
				var getWidth = function(){
					return panelContent.offsetWidth;
				};
				
				var setHeight = function(){
					var contentHeight = dropdownPanel.children()[0].offsetHeight;
					var toggleHeight = dropdownToggle[0].offsetHeight;
					
					var startingHeight = dropdownPanel[0].offsetHeight;
					
					console.log('setHeight');
					console.log('start:', startingHeight);
					console.log('content:', contentHeight);
					
					if(startingHeight > 10)
					if(startingHeight < contentHeight){
						console.log('growing');
						dropdownPanel.addClass('anchor-top');
						dropdownPanel.removeClass('anchor-bottom');
						
					} else {
						console.log('shrinking');
						dropdownPanel.addClass('anchor-top');
						dropdownPanel.removeClass('anchor-bottom');
						
					}
					
					dropdownPanel.height(contentHeight);
					
					/*
					if(startingHeight > 10){
						dropdownPanel.addClass('anchor-bottom');
						dropdownPanel.removeClass('anchor-top');
						
						if(startingHeight < contentHeight){
							console.log('growing');
						} else {
							console.log('shrinking');
							dropdownPanel.height(contentHeight);
						}
						
					}
					*/
					
					/*
					if(startingHeight < contentHeight){
						dropdownPanel.height(contentHeight);
					} else {
						dropdownPanel.height(startingHeight);
					}
					*/
					
					
				};
				
				var setWidth = function(){
					var contentWidth = dropdownPanel.children()[0].offsetWidth;
					var toggleWidth = dropdownToggle[0].offsetWidth;
					
					if(toggleWidth > contentWidth){
						dropdownPanel.width(toggleWidth);
						angular.element(dropdownPanel.children()[0]).addClass('fill-width');
					} else {
						dropdownPanel.width(contentWidth);
					}
					
					if(element.hasClass('anchor-right')){
						dropdownPanel.css('margin-left', -(contentWidth-toggleWidth)+'px');
					}
					
				};
				
				var showPanel = function(){
					
					dropdownPanel.addClass('anchor-bottom');
					dropdownPanel.removeClass('anchor-top');
					dropdownPanel.css('margin-top', '0');
					
					setHeight();
					setWidth();
					
					if(angular.isFunction(scope.openCallback)) scope.openCallback();
					
					dropdownPanel.addClass('show-panel');
					dropdownToggle.addClass('panel-shown');
					
					heightHandler = scope.$watch(getHeight, setHeight);
					widthHandler = scope.$watch(getWidth, setWidth);
					
					toggleHideListener(true);
				};
				
				var hidePanel = function(){
					var toggleHeight = element[0].offsetHeight;
					var toggleWidth = element[0].offsetWidth;
					
					dropdownPanel.addClass('anchor-bottom');
					dropdownPanel.removeClass('anchor-top');
					dropdownPanel.css('margin-top', '0');
					
					if(angular.isFunction(scope.closeCallback)) scope.closeCallback();
					
					dropdownPanel.height(0);
					dropdownPanel.width(toggleWidth);
					dropdownPanel.removeClass('show-panel')
					dropdownToggle.removeClass('panel-shown');
					
					heightHandler();
					widthHandler();
					
					toggleHideListener(false);
				};
				
				initialize();
				
			}
		};
	});