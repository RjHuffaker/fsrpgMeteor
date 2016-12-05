angular.module('freedomsworn')
	.component('fsGridResize', {
		controllerAs: 'vm',
		bindings: {
			resizeId: '=',
			resizeHeight: '=',
			resizeWidth: '=',
			columnShown: '='
		},
		controller($scope, $rootScope, $reactive, $document, $element, $window) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			var _resizeId = this.getReactively('resizeId');
			
			var _resizeHeight = this.getReactively('resizeHeight');
			
			var _resizeWidth = this.getReactively('resizeWidth');
			
			var _columnShown = this.getReactively('columnShown');
			
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
					_onDestroy = $scope.$on('$destroy', onDestroy);
					_onPress = $scope.$on('fsGridResize:onLongPress', select);
					_onRelease = $scope.$on('fsGridResize:onRelease', cancelPress);
					$element.on(_pressEvents, onPress);
				} else {
					_onDestroy();
					_onPress();
					_onRelease();
					$element.off(_pressEvents, onPress);
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
					$window.getComputedStyle($element[0], null).getPropertyValue('font-size')
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
				
				$rootScope.$broadcast('fsGridResize:onLongPress', {
					id: _resizeId
				});
				
			};
			
			var select = function(event, object){
				_onMove = $scope.$on('fsGridResize:onMove', resize);
				_parent = angular.element($element.context.parentElement)[0];
				_startHeight = _parent.offsetHeight;
				_startWidth = _parent.offsetWidth;
			};
			
			var onMove = function(event){
				_mouseX = event.pageX || event.touches[0].pageX;
				_mouseY = event.pageY || event.touches[0].pageY;
				
				_moveX = _mouseX - _startX;
				_moveY = _mouseY - _startY;
				
				_height = _startHeight + _moveY;
				_width = _startWidth + _moveX;
				
				$rootScope.$broadcast('fsGridResize:onMove', {
					id: _resizeId,
					height: _height,
					width: _width
				});
			};
			
			var resize = function(event, object){
				
				if(_columnShown){
					var _minWidth = _columnShown.minWidth;
					var _maxWidth = _columnShown.maxWidth;
					
					if(_resizeId === object.id && object.width){
						
						if(_minWidth < object.width){
							if(object.width < _maxWidth){
								this.resizeWidth = object.width;
								angular.element(_parent).css('width', object.width+'px');
							} else {
								this.resizeWidth = _maxWidth;
								angular.element(_parent).css('width', _maxWidth+'px');
							}
						} else {
							this.resizeWidth = _minWidth;
							angular.element(_parent).css('width', _minWidth+'px');
						}
					} else if(_resizeId === object.id && _resizeHeight){
						this.resizeHeight = object.height;
						angular.element(_parent).css('height', object.height+'px');
					} else if(_resizeHeight){
						var _width = _parent.children[0].children[0].offsetWidth;
						$element.css('width', _width+'px');
					}
					
					
					
				} else {
					if(_resizeId === object.id && _resizeWidth){
						this.resizeWidth = object.width;
						angular.element(_parent).css('width', object.width+'px');
					} else if(_resizeId === object.id && _resizeHeight){
						this.resizeHeight = object.height;
						angular.element(_parent).css('height', object.height+'px');
					} else if(_resizeHeight){
						var _width = _parent.children[0].children[0].offsetWidth;
						
						console.log('_width', _width);
						
						$element.css('width', _width+'px');
					}
				}
				
			};
			
			var getWidth = function(){
				var _nephew = $element.context.parentElement.children[0].children[0];
				if(_nephew){
					var _width = _nephew.offsetWidth;
					console.log('getWidth', _width);
					return _width;
				}
			};
			
			var setWidth = function(_width){
				console.log('setWidth', _width);
				$element.css('width', _width+'px');
				
			};
			
			
			var onRelease = function(){
				
				clearTimeout(_pressTimer);
				if(_onMove) _onMove();
				$document.off(_moveEvents, onMove);
				$document.off(_releaseEvents, onRelease);
				$rootScope.$broadcast('fsGridResize:onRelease');
			};
			
			var cancelPress = function(){
				clearTimeout(_pressTimer);
				if(_onMove) _onMove();
				$document.off(_moveEvents, cancelPress);
				$document.off(_releaseEvents, cancelPress);
				
				if(_resizeHeight){
					var _width = _parent.children[0].children[0].offsetWidth;
					$element.css('width', _width+'px');
				}
				
			};
			
			initialize();
			
		}
	});