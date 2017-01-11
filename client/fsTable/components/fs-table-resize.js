angular.module('freedomsworn')
	.component('fsTableResize', {
		controllerAs: 'vm',
		bindings: {
			resizeId: '=',
			resizeHeight: '=',
			minHeight: '='
		},
		controller($scope, $rootScope, $reactive, $document, $element, $window) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			var _resizeId = this.getReactively('resizeId');
			
			var _resizeHeight = this.getReactively('resizeHeight');
			
			var _minHeight = this.getReactively('minHeight');
			
			var _pressTimer, _onDestroy;
			
			var _startY, _moveY, _mouseY;
			
			var _startHeight, _height;
			
			var _parent;
			
			var _hasTouch = ('ontouchstart' in window);
			
			var _pressEvents = 'touchstart mousedown';
			var _moveEvents = 'touchmove mousemove';
			var _releaseEvents = 'touchend mouseup';
			
			var _pressTimer = null;
			
			var toggleListeners = function(enable){
				if(enable){
					_parent = angular.element(
											angular.element(
						            angular.element(
						              $element.context.parentElement
						            )[0].parentElement
					            )[0].parentElement
					          );
					
					_onDestroy = $scope.$on('$destroy', onDestroy);
					$element.on(_pressEvents, onPress);
				} else {
					_onDestroy();
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
				
				_startHeight = _parent[0].offsetHeight;
				
				_startY = (event.pageY || event.touches[0].pageY);
				
				_moveY = 0;
				
				$document.on(_moveEvents, onMove);
				$document.on(_releaseEvents, onRelease);
				
			};
			
			var onMove = function(event){
				_mouseY = event.pageY || event.touches[0].pageY;
				_moveY = _mouseY - _startY;
				_height = _startHeight + _moveY;
				_height = _height > _minHeight ? _height : _minHeight;
				_parent.css('height', _height+'px');
			};
			
			var onRelease = function(){
				
				clearTimeout(_pressTimer);
				$document.off(_moveEvents, onMove);
				$document.off(_releaseEvents, onRelease);
			};
			
			var cancelPress = function(){
				clearTimeout(_pressTimer);
				$document.off(_moveEvents, cancelPress);
				$document.off(_releaseEvents, cancelPress);
			};
			
			initialize();
			
		}
	});