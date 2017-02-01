angular.module('freedomsworn')
	.component('fsPanel', {
		templateUrl: '/client/fsPanel/components/fs-panel.html',
		controllerAs: 'vm',
		bindings: {
			card: '=',
			deck: '='
		},
		controller($rootScope, $scope, $reactive, $element, $document, $window, onCardMove){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			var _hasTouch = ('ontouchstart' in window);
			var _pressEvents = 'touchstart mousedown';
			var _moveEvents = 'touchmove mousemove';
			var _releaseEvents = 'touchend mouseup';
			
			var _startX, _startY,
					_mouseX, _mouseY,
					_moveX, _moveY,
					_cardX, _cardY,
					_slotX, _slotY,
					_startCol, _cardCol,
					_startRow, _cardRow,
					_moveTimer, _moveHandler, _releaseHander;
			
			var _pressTimer = null;
			
			this.featureCardTypes = [
				'Terrain','Surge','Hindrance',
				'Class','Faction','Race',
				'Trait','Feat','Augment','Item'
			];
			
			this.featureCardChoices = ['Choose Trait', 'Choose Feat', 'Choose Augment', 'Choose Item'];
			
			var _card = this.getReactively('card', true);
			
			var _deck = this.getReactively('deck', true);
			
			var toggleListeners = function(enable){
				if(enable){
					$scope.$on('$destroy', onDestroy);
					$element.on(_pressEvents, onPress);
					_pressHandler = $scope.$on('fsPanel:onPressCard', onPressCard);
					_moveHandler = $scope.$on('fsPanel:onMoveCard', onMoveCard);
					_releaseHander = $scope.$on('fsPanel:onReleaseCard', onReleaseCard);
					_leaveHander = $scope.$on('fsDeck:onMouseLeave', onMouseLeave);
				} else {
					if(_moveHandler) _moveHandler();
					if(_pressHandler) _pressHandler();
					if(_releaseHander) _releaseHander();
					
					$element.off(_pressEvents, onPress);
					$document.off(_moveEvents, onMove);
					$document.off(_releaseEvents, onRelease);
				}
			};
			
			var initialize = function(){
				toggleListeners(true);
				setPosition(_card.x_coord, _card.y_coord);
			};
			
			var onDestroy = function(enable){
				Meteor.clearTimeout(_pressTimer);
				toggleListeners(false);
			};
			
			//Helper Functions
			
			var getElementFontSize = function(){
				return parseFloat(
					$window.getComputedStyle($element[0], null).getPropertyValue('font-size')
				);
			};
			
			var convertEm = function(value){
				return value * getElementFontSize();
			};
			
			var setPosition = function(x_coord, y_coord){
				$element.css({
					left: x_coord + 'em',
					top: y_coord + 'em'
				});
			};
			
			// Initial local "press" function
			var onPress = function(event){
				console.log(_deck);
				
				
				if(_hasTouch){
					cancelPress();
					_pressTimer = Meteor.setTimeout(function(){
						cancelPress();
						onLongPress(event);
					}, 100);
					
					$document.on(_moveEvents, cancelPress);
					$document.on(_releaseEvents, cancelPress);
				}else if(!_hasTouch){
					onLongPress(event);
				}
			};
			
			var cancelPress = function(){
				Meteor.clearTimeout(_pressTimer);
				$document.off(_moveEvents, cancelPress);
				$document.off(_releaseEvents, cancelPress);
			};
			
			// Local "press" function
			var onLongPress = function(event){
				
				_startX = (event.pageX || event.touches[0].pageX);
				_startY = (event.pageY || event.touches[0].pageY);
				
				_moveX = 0;
				_moveY = 0;
				
				$document.on(_moveEvents, onMove);
				$document.on(_releaseEvents, onRelease);
				
				$element.removeClass('card-moving');
				
				_card.dragging = true;
				
				_deck.getStack(_card,
					function(stackArray){
						for(var i = 0; i < stackArray.length; i++){
							stackArray[i].dragging = true;
						}
				});
				
				$rootScope.$broadcast('fsPanel:onPressCard', {
					deckId: _deck._id
				});
				
			};
			
			// Global "press" function
			var onPressCard = function(event, object){
				
				if(object.deckId === _deck._id){
					
					_startCol = convertEm(_card.x_coord);
					
					_startRow = convertEm(_card.y_coord);
					
					if(_card.dragging){
						
						$element.addClass('dragging');
						
						$element.removeClass('card-moving');
						
					} else {
						
						$element.removeClass('dragging');
						
						$element.addClass('card-moving');
						
					}
				}
			};
			
			
			// MOVE
			// Local "move" function
			var onMove = function(event){
				
				event.preventDefault();
				
				_mouseX = (event.pageX || event.touches[0].pageX);
				_mouseY = (event.pageY || event.touches[0].pageY);
				
				_moveX = _mouseX - _startX;
				_moveY = _mouseY - _startY;
				
				$rootScope.$broadcast('fsPanel:onMoveCard', {
					deckId: _deck._id,
					panel: _card,
					moveX: _moveX,
					moveY: _moveY,
					mouseX: _mouseX,
					mouseY: _mouseY
				});
				
			};
			
			// Global "move" function
			var onMoveCard = function(event, object){
				
				if(object.deckId === _deck._id){
					
					if(_card.dragging){
						
						$element.css({
							left: object.moveX + _startCol + 'px',
							top: object.moveY + _startRow + 'px'
						});
						
					} else {
						
						object.slot = _card;
						object.offset = $element.offset();
						object.emPx = convertEm(1);
						
						onCardMove(_deck, object);
						
						setPosition(_card.x_coord, _card.y_coord);
						
					}
				}
			};
			
			// RELEASE
			// Local "release" function
			var onRelease = function(){
				$document.off(_moveEvents, onMove);
				$document.off(_releaseEvents, onRelease);
				
				if(Math.abs(_moveX) <= convertEm(1) && Math.abs(_moveY) <= convertEm(1)){
					_deck.toggleOverlap(_card._id);
				}
				
				_deck.setCardStop();
				
				$rootScope.$broadcast('fsPanel:onReleaseCard', {
					deckId: _deck._id
				});
				
			};
			
			// Global "release" function
			var onReleaseCard = function(event, object){
				if(object.deckId === _deck._id){
					
					_card.dragging = false;
					
					$element.removeClass('dragging');
					
					$element.addClass('card-moving');
					
					Meteor.setTimeout(function(){
						setPosition(_card.x_coord, _card.y_coord);
					}, 0);
					
					_moveTimer = Meteor.setTimeout(function(){
						$element.removeClass('card-moving');
					}, 750);
					
				}
			};
			
			// Respond to 'onMouseLeave' event similar to onRelease, but without toggling overlap
			var onMouseLeave = function(){
				$document.off(_moveEvents, onMove);
				$document.off(_releaseEvents, onRelease);
				
				_deck.setCardStop();
				
				$rootScope.$broadcast('fsPanel:onReleaseCard', {
					deckId: _deck._id
				});
			};
			
			initialize();
			
		}
	});