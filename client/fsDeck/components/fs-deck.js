angular.module('freedomsworn')
	.component('fsDeck', {
		templateUrl: '/client/fsDeck/components/fs-deck.html',
		controllerAs: 'vm',
		bindings: {
			deck: '='
		},
		controller($element, $scope, $reactive, $document) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.helpers({
				cardId(){
					return Session.get('cardId');
				},
				deckId(){
					return Session.get('deckId');
				},
				cardPressed(){
					return Session.get('cardPressed');
				},
				startX(){
					return Session.get('startX');
				},
				startY(){
					return Session.get('startY');
				},
				moveX(){
					return Session.get('moveX');
				},
				moveY(){
					return Session.get('moveY');
				},
				mouseX(){
					return Session.get('mouseX');
				},
				mouseY(){
					return Session.get('mouseY');
				},
				startCol(){
					return Session.get('startCol');
				},
				startRow(){
					return Session.get('startRow');
				}
			});
			
			var _moveEvents = 'touchmove mousemove';
			var _releaseEvents = 'touchend mouseup';
			
			var initialize = function(){
				toggleListeners(true);
			};
			
			var toggleListeners = function (enable) {
				// remove listeners
				if (!enable)return;
				
				// add listeners
				$scope.$on('$destroy', onDestroy);
				$element.on('mouseleave', onMouseLeave);
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
					$window.getComputedStyle(element[0], null).getPropertyValue('font-size')
				);
			};
			
			var convertEm = function(value) {
				return value * getElementFontSize();
			};
			
			var onMouseLeave = function(event, object){
				console.log('onMouseLeave');
			};
			
			initialize();
			
		}
	});