angular.module('freedomsworn')
	.directive('fsModalToggle', function($window, modalSrvc){
		'ngInject';

		return {
			restrict: 'A',
			scope: {
				toggleCallback: '&',
				toggleCard: '=',
				toggleDeck: '=',
				modalDeck: '='
			},
			link: function(scope, element, attrs){
				
				var _pressEvents = 'touchstart mousedown';
				
				var initialize = function(){
					// prevent native drag
					element.attr('draggable', 'false');
					toggleListeners(true);
				};
				
				var toggleListeners = function(enable){
					if (!enable)return;
					
					scope.$on('$destroy', onDestroy);
					element.on(_pressEvents, onPress);
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
				
				var getModal = function(){
					
					var toggle_x_coord = element.offset().left;
					var toggle_y_coord = element.offset().top;
					var toggle_y_dim = element[0].offsetHeight;
					var toggle_x_dim = element[0].offsetWidth;
					var modal_x_align = attrs.modalxalign;
					var modal_y_align = attrs.modalyalign ? attrs.modalyalign : toggle_y_coord*2 < $window.innerHeight ? 'bottom' : 'top';
					var modal_x_dim = convertEm(attrs.modalxdim);
					var modal_y_dim = convertEm(attrs.modalydim);
					var toggle_card = scope.toggleCard;
					var toggle_deck = scope.toggleDeck;
					var modal_deck = scope.modalDeck;
					var modal_content = angular.element(element.find('.fs-modal-content')[0]).clone(true);
					
					return {
						toggle_x_coord: toggle_x_coord,
						toggle_y_coord: toggle_y_coord,
						toggle_x_dim: toggle_x_dim,
						toggle_y_dim: toggle_y_dim,
						modal_x_align: modal_x_align,
						modal_y_align: modal_y_align,
						modal_x_dim: modal_x_dim,
						modal_y_dim: modal_y_dim,
						toggle_card: toggle_card,
						toggle_deck: toggle_deck,
						modal_content: modal_content,
						show: 'modal'
					};
				};
				
				var getDeck = function(){
					return {
						toggle_card: scope.toggleCard,
						toggle_deck: scope.toggleDeck,
						modal_deck: scope.modalDeck,
						show: 'deck'
					};
				};
				
				var onPress = function(event){
					
					if(scope.modalDeck){
						modalSrvc.current = getDeck();
					} else {
						modalSrvc.current = getModal();
					}
					
					scope.toggleCallback();
					
					event.stopPropagation();
					
					scope.$apply();
				};
				
				initialize();
			}
		};
	});