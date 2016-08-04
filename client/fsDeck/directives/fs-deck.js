angular.module('freedomsworn')
	.directive('fsDeck',
		function($rootScope, $window){
			'ngInject';

			return {
				restrict: 'A',
				scope: { deck: '=fsDeck' },
				templateUrl: paths.fsDeck.views+'fs-deck.ng.html',
				link: function(scope, element, attrs) {
					
					var pressed = false;
					
					var initialize = function(){
						toggleListeners(true);
					};
					
					var toggleListeners = function (enable) {
						// remove listeners
						if (!enable)return;
						
						// add listeners
						scope.$on('$destroy', onDestroy);
						element.on('mouseleave', onMouseLeave);
						scope.$on('screenSize:onHeightChange', onHeightChange);
						scope.$on('fsPanel:setDeckWidth', setDeckWidth);
						scope.$on('fsPanel:onPressCard', onPress);
						scope.$on('fsPanel:onReleaseCard', onRelease);
						scope.$on('fsPanel:onMoveCard', onMoveCard);
					};
					
					var onDestroy = function(enable){
						toggleListeners(false);
					};
					
					var onHeightChange = function(event, object){
						var windowHeight = object.newHeight-50;
						element.css({
							'height': windowHeight+'px'
						});
					};
					
					var setDeckWidth = function(){
						var deckWidth = scope.deck.getDeckWidth();
						element.css({
							'width': deckWidth+'em'
						});
					};
					
					var getElementFontSize = function(){
						return parseFloat(
							$window.getComputedStyle(element[0], null).getPropertyValue('font-size')
						);
					};
					
					var convertEm = function(value) {
						return value * getElementFontSize();
					};
					
					var onPress = function(){
						pressed = true;
					};
					
					var onRelease = function(){
						pressed = false;
					};
					
					var onMoveCard = function(event, object){
						if(!scope.deck) return; 
						
						var _deckOffset = element.offset();
						var _deckWidth = scope.deck.getDeckWidth();
						var _deckLeftEdge = _deckOffset.left;
						var _deckRightEdge = convertEm(_deckWidth + 3);
						var _panel = object.panel;
						
						var _panelStart = scope.deck.getStackStart(_panel._id);
						var _panelStartPrev = scope.deck.getPrev(_panelStart._id);
						
						if(object.mouseX <= _deckLeftEdge && (_panel.above || _panel.left)){
							scope.deck.movePanel(_panelStartPrev, object.panel, 'right', object.moveX, object.moveY);
						} else if(object.mouseX >= _deckRightEdge && (_panel.above || _panel.left)){
							scope.deck.movePanel(_panelStartPrev, object.panel, 'left', object.moveX, object.moveY);
						}
						
					};
					
					var onMouseLeave = function(event){
						if(pressed){
							$rootScope.$broadcast('fsDeck:onMouseLeave');
						}
					};
					
					initialize();
				}
			};
		});