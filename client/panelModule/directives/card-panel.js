'use strict';

// Directive for managing card decks.
angular.module('freedomsworn')
	.directive('cardPanel', ['$document', '$parse', '$rootScope', '$window', 'CoreVars', 'checkEdge', 'onCardMove', 'toggleOverlap', 'PanelUtils', 'DeckUtils',
		function($document, $parse, $rootScope, $window, CoreVars, checkEdge, onCardMove, toggleOverlap, PanelUtils, DeckUtils){
			return {
				restrict: 'A',
				templateUrl: paths.panelModule.views+'card-panel.ng.html',
				link: function(scope, element, attrs){
					
					scope.CoreVars = CoreVars;
					
					Array.min = function(array){
						return Math.min.apply(Math, array);
					};
					
					var _startX, _startY, 
						_mouseX, _mouseY,
						_moveX, _moveY,
						_panelX, _panelY,
						_slotX, _slotY,
						_startCol, _mouseCol, _panelCol,
						_startRow, _mouseRow, _panelRow,
						_moveTimer;
					
					var _dropdownOpen = false;
					
					var _panel = $parse(attrs.panel) || null;
					
					var _deck = $parse(attrs.deck) || null;
					
					var _hasTouch = ('ontouchstart' in window);
					
					var _pressEvents = 'touchstart mousedown';
					var _moveEvents = 'touchmove mousemove';
					var _releaseEvents = 'touchend mouseup';
					
					var _pressTimer = null;
					
					var _cardWatcher, _deckWatcher,
							_panelXWatcher, _panelYWatcher,
							_heightHandler, _pressHandler,
							_moveHandler, _releaseHander,
							_leaveHander, _dropdownHandler;
					
					var initialize = function(){
						// prevent native drag
						element.attr('draggable', 'false');
						toggleListeners(true);
						$document.ready(function () {
							onHeightChange();
						});
					};
					
					var toggleListeners = function(enable){
						if (enable){
							
							// add listeners
							scope.$on('$destroy', onDestroy);
							_cardWatcher = scope.$watch(attrs.panel, onCardChange);
							_deckWatcher = scope.$watch(attrs.deck, onDeckChange);
							_heightHandler = scope.$on('screenSize:onHeightChange', onHeightChange);
							_pressHandler = scope.$on('cardPanel:onPressCard', onPressCard);
							_moveHandler = scope.$on('cardPanel:onMoveCard', onMoveCard);
							_releaseHander = scope.$on('cardPanel:onReleaseCard', onReleaseCard);
							_leaveHander = scope.$on('deckStack:onMouseLeave', onMouseLeave);
							_dropdownHandler = scope.$on('CardsCtrl:onDropdown', onDropdown);
							_panelXWatcher = scope.$watch('panel.x_coord', resetPosition);
							_panelYWatcher = scope.$watch('panel.y_coord', resetPosition);
							element.on(_pressEvents, onPress);
							
							// prevent native drag for images
							 if(! _hasTouch && element[0].nodeName.toLowerCase() === 'img'){
								element.on('mousedown', function(){ return false;});
							}
							
						} else {
							_cardWatcher();
							_deckWatcher();
							_heightHandler();
							_pressHandler();
							_moveHandler();
							_releaseHander();
							_leaveHander();
							_dropdownHandler();
							_panelXWatcher();
							_panelYWatcher();
						}
					};
					
					var onDestroy = function(enable){
						toggleListeners(false);
					};
					
					var onCardChange = function(newVal, oldVal){
						_panel = newVal;
						
						element.css({
							top: '0',
							left: '-21em'
						});
						
						setTimeout(function(){
							setPosition();
						}, 0);
					};
					
					var onDeckChange = function(newVal, oldVal){
						_deck = newVal;
					};
					
					var onDropdown = function(event, object){
						_dropdownOpen = object.isOpen;
					};
					
					var getElementFontSize = function() {
						return parseFloat(
							$window.getComputedStyle(element[0], null).getPropertyValue('font-size')
						);
					};
					
					var convertEm = function(value) {
						return value * getElementFontSize();
					};
					
					var onHeightChange = function(event, object){
						CoreVars.x_dim_px = convertEm(15);
						CoreVars.y_dim_px = convertEm(21);
						CoreVars.x_tab_px = convertEm(3);
						CoreVars.y_tab_px = convertEm(3);
						CoreVars.x_cover_px = convertEm(12);
						CoreVars.y_cover_px = convertEm(18);
						
						setPosition();
					};
					
					var resetPosition = function(newVal, oldVal){
						if(element.hasClass('card-moving')){
							setPosition();
						}
					};
					
					var setPosition = function(){
						element.css({
							top: _panel.y_coord + 'em',
							left: _panel.x_coord + 'em'
						});
					};
					
					// When the element is clicked start the drag behaviour
					var onPress = function(event){
						if(!_dropdownOpen){
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
						} else {
							$document.triggerHandler('click');
						}
					};
					
					var cancelPress = function(){
						clearTimeout(_pressTimer);
						$document.off(_moveEvents, cancelPress);
						$document.off(_releaseEvents, cancelPress);
					};
					
					// PRESS
					// Primary "press" function
					var onLongPress = function(event){
						
						_startX = (event.pageX || event.touches[0].pageX);
						_startY = (event.pageY || event.touches[0].pageY);
						
						_moveX = 0;
						_moveY = 0;
						
						$document.on(_moveEvents, onMove);
						$document.on(_releaseEvents, onRelease);
						
						element.removeClass('card-moving');
						
						PanelUtils.getCluster(_deck.cardList, _panel,
							function(stackArray){
								for(var i = 0; i < stackArray.length; i++){
	                stackArray[i].dragging = true;
	              }
						});
						
						$rootScope.$broadcast('cardPanel:onPressCard', {
							startX: _startX,
							startY: _startY,
							panel: _panel
						});
					};
					
					var onPressCard = function(event, object){
						
						_startCol = convertEm(_panel.x_coord);
						_startRow = convertEm(_panel.y_coord);
						
						if(!_panel.dragging){
							element.addClass('card-moving');
						}
					};
					
					// MOVE
					// Primary "move" function
					var onMove = function(event){
						event.preventDefault();
						
						_mouseX = (event.pageX || event.touches[0].pageX);
						_mouseY = (event.pageY || event.touches[0].pageY);
						
						_mouseCol = convertEm(_panel.x_coord);
						_mouseRow = convertEm(_panel.y_coord);
						
						_moveX = _mouseX - _startX;
						_moveY = _mouseY - _startY;
						
						_panelX = _moveX + _startCol - (_startCol - _mouseCol);
						_panelY = _moveY + _startRow - (_startRow - _mouseRow);
						
						$rootScope.$broadcast('cardPanel:onMoveCard', {
							mouseX: _mouseX,
							mouseY: _mouseY,
							moveX: _moveX,
							moveY: _moveY,
							panelX: _panelX,
							panelY: _panelY,
							panel: _panel
						});
					};
					
					// Function to move a single card or each card in a vertical stack
					var onMoveCard = function(event, object){
						object.slot = _panel;
						object.offset = element.offset();
						object.emPx = convertEm(1);
						if(!element.hasClass('card-moving')){
							element.css({
								left: object.moveX + _startCol + 'px',
								top: object.moveY + _startRow + 'px'
							});
						} else {
							onCardMove(_deck.cardList, object);
						}
					};
					
					// RELEASE
					// Primary "release" function
					var onRelease = function(){
						$document.off(_moveEvents, onMove);
						$document.off(_releaseEvents, onRelease);
						$rootScope.$broadcast('cardPanel:onReleaseCard', {
							panel: _panel
						});
						
						if(Math.abs(_moveX) <= convertEm(1) && Math.abs(_moveY) <= convertEm(1)){
							var _offset = element.offset();
							var _nearest = checkEdge.crossing(_panel, _offset.left, _offset.top, _startX, _startY, convertEm(1));
							toggleOverlap(_deck.cardList, _panel._id, _nearest);
						}
						CoreVars.cardMoved.length = 0;
						for(var i = 0; i < _deck.cardList.length; i++){
							_deck.cardList[i].dragging = false;
						}
					};
					
					// General response to "release" event
					var onReleaseCard = function(event, object){
						element.addClass('card-moving');
						setTimeout(function(){
							setPosition();
						}, 0);
						
						clearTimeout(_moveTimer);
						
						_moveTimer = setTimeout(function(){
							element.removeClass('card-moving');
						}, 600);
					};
					
					// Respond to 'onMouseLeave' event similar to onRelease, but without toggling overlap
					var onMouseLeave = function(){
						$document.off(_moveEvents, onMove);
						$document.off(_releaseEvents, onRelease);
						$rootScope.$broadcast('cardPanel:onReleaseCard', {
							panel: _panel
						});
					};
					
					initialize();
					
				}
			};
		}]);