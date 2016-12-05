angular.module('freedomsworn')
	.component('fsModalToggle', {
		controllerAs: 'vm',
		bindings: {
			toggleCallback: '&',
			toggleCard: '=',
			toggleDeck: '=',
			modalDeck: '=',
			modalxalign: '=',
			modalyalign: '=',
			modalxdim: '=',
			modalydim: '='
		},
		controller($scope, $reactive, $element, $window, modalSrvc) {
			'ngInject';
			
			var _pressEvents = 'touchstart mousedown';
			
			$reactive(this).attach($scope);
			
			var _toggleCallback = this.getReactively('toggleCallback', true);
			var _toggleCard = this.getReactively('toggleCard', true);
			var _toggleDeck = this.getReactively('toggleDeck', true);
			var _modalDeck = this.getReactively('modalDeck', true);
			var _modalxalign = this.getReactively('modalxalign');
			var _modalyalign = this.getReactively('modalyalign');
			var _modalxdim = this.getReactively('modalxdim');
			var _modalydim = this.getReactively('modalydim');
			
			var initialize = function(){
				// prevent native drag
				$element.attr('draggable', 'false');
				toggleListeners(true);
			};
			
			var toggleListeners = function(enable){
				if(enable){
					$scope.$on('$destroy', onDestroy);
					$element.on(_pressEvents, onPress);
				} else {
					$element.off(_pressEvents, onPress);
				}
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
			
			var getModal = function(){
				var toggle_x_coord = $element.offset().left;
				var toggle_y_coord = $element.offset().top;
				var toggle_y_dim = $element[0].offsetHeight;
				var toggle_x_dim = $element[0].offsetWidth;
				var modal_x_align = _modalxalign;
				var modal_y_align = _modalyalign ? _modalyalign : toggle_y_coord*2 < $window.innerHeight ? 'bottom' : 'top';
				var modal_x_dim = convertEm(_modalxdim);
				var modal_y_dim = convertEm(_modalydim);
				var toggle_card = _toggleCard;
				var toggle_deck = _toggleDeck;
				var modal_deck = _modalDeck;
				var modal_content = angular.element($element.find('.fs-modal-content')[0]).clone(true);
				
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
			
			this.getDeck = function(){
				return {
					toggle_card: _toggleCard,
					toggle_deck: _toggleDeck,
					modal_deck: _modalDeck,
					show: 'deck'
				};
			};
			
			var onPress = function(event){
				
				if(this.modalDeck){
					modalSrvc.current = getDeck();
				} else {
					modalSrvc.current = getModal();
				}
				
				_toggleCallback();
				
				event.stopPropagation();
				
				$scope.$apply();
			};
			
			initialize();
			
		}
	});