angular.module('freedomsworn')
	.directive('resizeHandle', function($document, $window, $rootScope){
		'ngInject';
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				
				var _pressTimer, _onDestroy, _onMove;
				
				var _startX, _startY, _moveX, _moveY, _mouseX, _mouseY;
				
				var _startHeight, _startWidth, _height, _width;
				
				var _parent;
				
				var _hasTouch = ('ontouchstart' in window);
				
				var _pressEvents = 'touchstart mousedown';
				var _moveEvents = 'touchmove mousemove';
				var _releaseEvents = 'touchend mouseup';
				
				var _pressTimer = null;
				
				var toggleListeners = function(enable){
					if(enable){
						_onDestroy = scope.$on('$destroy', onDestroy);
						_onPress = scope.$on('resizeHandle:onLongPress', select);
						_onRelease = scope.$on('resizeHandle:onRelease', cancelPress);
						element.on(_pressEvents, onPress);
						
					} else {
						_onDestroy();
						_onPress();
						_onRelease();
						element.off(_pressEvents, onPress);
					}
				};
				
				var initialize = function(){
					toggleListeners(true);
				};
				
				var onDestroy = function(enable){
					toggleListeners(false);
				};
				
				var getElementFontSize = function() {
					return parseFloat(
						$window.getComputedStyle(element[0], null).getPropertyValue('font-size')
					);
				};
				
				var convertEm = function(value) {
					return value * getElementFontSize();
				};
				
				var onPress = function(event){
					// Small delay for touch devices to allow for native window scrolling
					if(_hasTouch){
						cancelPress();
						_pressTimer = setTimeout(function(){
							cancelPress();
							onLongPress(event);
						}, 100);
						
						$document.on(_moveEvents, cancelPress);
						$document.on(_releaseEvents, cancelPress);
					}else if(!_hasTouch){
						onLongPress(event);
					}
				};
				
				var onLongPress = function(event){
					_startX = (event.pageX || event.touches[0].pageX);
					_startY = (event.pageY || event.touches[0].pageY);
					
					_moveX = 0;
					_moveY = 0;
					
					$document.on(_moveEvents, onMove);
					$document.on(_releaseEvents, onRelease);
					
					$rootScope.$broadcast('resizeHandle:onLongPress', {
						id: attrs.id
					});
					
				};
				
				var select = function(event, object){
					_onMove = scope.$on('resizeHandle:onMove', resize);
					if(object.id === attrs.id){
						console.log(attrs.id);
						_parent = angular.element(element.context.parentElement)[0];
						_startHeight = _parent.offsetHeight;
						_startWidth = _parent.offsetWidth;
					} else {
						_parent = null;
					}
				};
				
				var onMove = function(event){
					_mouseX = (event.pageX || event.touches[0].pageX);
					_mouseY = (event.pageY || event.touches[0].pageY);
					
					_moveX = _mouseX - _startX;
					_moveY = _mouseY - _startY;
					
					if(attrs.resizeHandle === 'Height'){
						_height = _startHeight + _moveY;
						if(_height > convertEm(2)){
							angular.element(_parent).css('height', _height+'px');
						}
					} else if(attrs.resizeHandle === 'Width'){
						_width = _startWidth + _moveX;
						if(_width > convertEm(5)){
							$rootScope.$broadcast('resizeHandle:onMove', {
								id: attrs.id,
								width: _width
							});
						}
					}
				};
				
				var resize = function(event, object){
					if(attrs.id === object.id && _parent){
						if(attrs.resizeHandle === 'Height'){
							angular.element(_parent).css('height', object.height+'px');
						} else if(attrs.resizeHandle === 'Width'){
							angular.element(_parent).css('width', object.width+'px');
						}
					}
				};
				
				var onRelease = function(){
					clearTimeout(_pressTimer);
					_onMove();
					$document.off(_moveEvents, cancelPress);
					$document.off(_releaseEvents, cancelPress);
					_parent = null;
					$rootScope.$broadcast('resizeHandle:onRelease');
				};
				
				var cancelPress = function(){
					clearTimeout(_pressTimer);
					_onMove();
					$document.off(_moveEvents, cancelPress);
					$document.off(_releaseEvents, cancelPress);
					_parent = null;
				};
				
				
				
				initialize();
			}
		};
	});