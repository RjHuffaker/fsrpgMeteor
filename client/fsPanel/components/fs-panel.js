angular.module('freedomsworn')
	.component('fsPanel', {
		templateUrl: '/client/fsPanel/components/fs-panel.html',
		controllerAs: 'vm',
		bindings: {
			card: '=',
			deck: '='
		},
		controller($scope, $reactive, $element, $document, $window, onCardMove){
			'ngInject';
			
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
					_moveTimer;
			
			var _pressTimer = null;
			
			$reactive(this).attach($scope);
			
			var _card = this.getReactively('card', true);
			
			var _deck = this.getReactively('deck', true);
			
			var toggleListeners = function(enable){
				if(enable){
					$scope.$on('$destroy', onDestroy);
					$element.on(_pressEvents, onPress);
				} else {
					
					$element.off(_pressEvents, onPress);
				}
			};
			
			var initialize = function(){
				toggleListeners(true);
				setPosition(_card.x_coord, _card.y_coord);
			};
			
			var onDestroy = function(enable){
				Meteor.setTimeout(_pressTimer);
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
			
			var onPress = function(event){
				console.log('onPress');
				if(_hasTouch){
					Meteor.clearTimeout(_pressTimer);
					_pressTimer = Meteor.setTimeout(function(){
						Meteor.clearTimeout(_pressTimer);
						onLongPress(event);
					}, 100);
					
				}else if(!_hasTouch){
					onLongPress(event);
				}
			};
			
			var onLongPress = function(event){
				
				_startX = (event.pageX || event.touches[0].pageX);
				_startY = (event.pageY || event.touches[0].pageY);
				
				_moveX = 0;
				_moveY = 0;
				
				_startCol = convertEm(_card.x_coord);
				_startRow = convertEm(_card.y_coord);
				
				_cardX = _startCol;
				_cardY = _startRow;
				
				$element.removeClass('card-moving');
				$element.addClass('dragging');
				
				_deck.getStack(_card,
					function(stackArray){
						for(var i = 0; i < stackArray.length; i++){
							stackArray[i].dragging = true;
						}
				});
				
				$document.on(_moveEvents, onMove);
				$document.on(_releaseEvents, onRelease);
				
				Session.set('cardPressed', true);
				Session.set('deckId', _deck._id);
				Session.set('cardId', _card._id);
				Session.set('moveX', 0);
				Session.set('moveY', 0);
				Session.set('startCol', _startCol);
				Session.set('startRow', _startRow);
				
			};
			
			this.autorun(() => {
				// Watch for changes in card position. Move card to default position unless it is being dragged.
				
				var _x_coord = this.getReactively('card.x_coord');
				var _Y_coord = this.getReactively('card.y_coord');
				var _dragging = this.getReactively('card.dragging');
				
				if(!_dragging){
					$element.addClass('card-moving');
					setPosition(_x_coord, _Y_coord);
				}
				
			});
			
			
			// MOVE
			// Primary "move" function
			var onMove = function(event){
				
				event.preventDefault();
				
				_mouseX = (event.pageX || event.touches[0].pageX);
				_mouseY = (event.pageY || event.touches[0].pageY);
				
				_cardCol = convertEm(_card.x_coord);
				_cardRow = convertEm(_card.y_coord);
				
				_moveX = _mouseX - _startX;
				_moveY = _mouseY - _startY;
				
				_cardX = _moveX + _startCol - (_startCol - _cardCol);
				_cardY = _moveY + _startRow - (_startRow - _cardRow);
				
				Session.set('cardPressed', true);
				Session.set('deckId', _deck._id);
				Session.set('cardId', _card._id);
				Session.set('mouseX', _mouseX);
				Session.set('mouseY', _mouseY);
				Session.set('moveX', _moveX);
				Session.set('moveY', _moveY);
			};
			
			
			this.autorun(() => {
				// Watch for mouse movement. If card is being dragged, move it with the cursor.
				// Replaces global onCardMove function
				
				_moveX = Session.get('moveX');
				_moveY = Session.get('moveY');
				
				_cardX = _moveX + _startCol;
				_cardY = _moveY + _startRow;
				
				var _cardPressed = Session.get('cardPressed');
				
				if(_cardPressed){
					
					if(_card.dragging){
						
						$element.css({
							left: _cardX + 'px',
							top: _cardY + 'px'
						});
						
					} else {
						
						if(Session.equals('deckId', _deck._id)){
							
							if(!Session.equals('cardId', _card._id)){
								
								_mouseX = Session.get('mouseX');
								_mouseY = Session.get('mouseY');
								
								var _panel = _deck.getPanel(Session.get('cardId'));
								var _offset = $element.offset();
								var _emPx = convertEm(1);
								
								onCardMove(_deck, {
									deckId: _deck._id,
									mouseX: _mouseX,
									mouseY: _mouseY,
									moveX: _moveX,
									moveY: _moveY,
									panelX: _cardX,
									panelY: _cardY,
									panel: _panel,
									slot: _card,
									offset: _offset,
									emPx: _emPx
								});
								
							}
						}
					}
				}
			});
			
			
			
			// RELEASE
			// Primary "release" function
			var onRelease = function(){
				$document.off(_moveEvents, onMove);
				$document.off(_releaseEvents, onRelease);
				
				Session.set('cardPressed', false);
				
				if(Math.abs(_moveX) <= convertEm(1) && Math.abs(_moveY) <= convertEm(1)){
					_deck.toggleOverlap(_card._id);
				}
				
				_deck.setCardStop();
				
				for(var i = 0; i < _deck.cardList.length; i++){
					_deck.cardList[i].dragging = false;
				}
			};
			
			this.autorun(() => {
				// Watch for changes to 'cardPressed'
				// Replaces global onCardRelease function
				
				var cardPressed = Session.get('cardPressed');
				
				if(!cardPressed && Session.equals('cardId', _card._id)){
					
					if(_card.dragging){
						
						Session.set('deck', _deck);
						
						for(var i = 0; i < _deck.cardList.length; i++){
							_deck.cardList[i].dragging = false;
						}
						
						
						if(Math.abs(_moveX) <= convertEm(1) && Math.abs(_moveY) <= convertEm(1)){
							
							console.log();
							
							_deck.setCardStop();
							
							_deck.toggleOverlap(_card._id);
							
						}
						
						setPosition(_card.x_coord, _card.y_coord);
						
						Session.set('deckId', _deck._id);
						Session.set('cardId', 0);
						Session.set('moveX', 0);
						Session.set('moveY', 0);
						Session.set('mouseX', 0);
						Session.set('mouseY', 0);
						
						_moveX = 0;
						_moveY = 0;
						_cardX = _card.x_coord;
						_cardY = _card.y_coord;
					}
				} else {
					_startCol = convertEm(_card.x_coord);
					_startRow = convertEm(_card.y_coord);
					
				}
				
				Session.set('deckId', _deck._id);
				Session.set('cardId', 0);
				Session.set('moveX', 0);
				Session.set('moveY', 0);
				Session.set('mouseX', 0);
				Session.set('mouseY', 0);
				
			});
			
			
			
			
			initialize();
			
		}
	});