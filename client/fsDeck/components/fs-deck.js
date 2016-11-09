angular.module('freedomsworn')
	.component('fsDeck', {
		templateUrl: '/client/fsDeck/components/fs-deck.html',
		controllerAs: 'vm',
		bindings: {
			deck: '='
		},
		controller($rootScope, $scope, $reactive, $element, $document, $window) {
			'ngInject';
			
			var _pressed = false;
			
			var _moveEvents = 'touchmove mousemove';
			var _releaseEvents = 'touchend mouseup';
			
			$reactive(this).attach($scope);
			
			var _deck = this.getReactively('deck', true);
			
			var initialize = function(){
				
				
				toggleListeners(true);
			};
			
			var toggleListeners = function(enable){
				if(enable){
					$scope.$on('$destroy', onDestroy);
					$element.on('mouseleave', onMouseLeave);
					$scope.$on('fsPanel:onPressCard', onPress);
					$scope.$on('fsPanel:onReleaseCard', onRelease);
					$scope.$on('fsPanel:onMoveCard', onMoveCard);
				} else {
					
				}
			};
			
			var onDestroy = function(enable){
				toggleListeners(false);
			};
			
			var onHeightChange = function(event, object){
				var windowHeight = object.newHeight-50;
				$element.css({
					'height': windowHeight+'px'
				});
			};
			
			var setDeckWidth = function(){
				var deckWidth = this.deck.getDeckWidth();
				$element.css({
					'width': deckWidth+'em'
				});
			};
			
			var getElementFontSize = function(){
				return parseFloat(
					$window.getComputedStyle($element[0], null).getPropertyValue('font-size')
				);
			};
			
			var convertEm = function(value) {
				return value * getElementFontSize();
			};
			
			var onPress = function(event, object){
				if(!_deck){
					console.log('_deck undefined');
					return;
				}
				
				if(object.deckId === _deck._id){
					_pressed = true;
				}
			};
			
			var onRelease = function(){
				_pressed = false;
			};
			
			var onMoveCard = function(event, object){
				if(!_deck){
					console.log('_deck undefined');
					return;
				}
				
				if(object.deckId === _deck._id){
					var _deckOffset = $element.offset();
					var _deckWidth = _deck.getDeckWidth();
					var _deckLeftEdge = _deckOffset.left;
					var _deckRightEdge = convertEm(_deckWidth + 3);
					var _panel = object.panel;
					
					var _panelStart = _deck.getStackStart(_panel._id);
					var _panelStartPrev = _deck.getPrev(_panelStart._id);
					
					if(object.mouseX <= _deckLeftEdge && (_panel.above || _panel.left)){
						_deck.movePanel(_panelStartPrev, object.panel);
					} else if(object.mouseX >= _deckRightEdge && (_panel.above || _panel.left)){
						_deck.movePanel(_panelStartPrev, object.panel);
					}
				}
			};
			
			var onMouseLeave = function(event, object){
				if(_pressed){
					$rootScope.$broadcast('fsDeck:onMouseLeave');
				}
			};
			
			initialize();
			
		}
	});