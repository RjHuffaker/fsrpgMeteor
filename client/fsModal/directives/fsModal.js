angular.module('freedomsworn')
	.directive('fsModal', function($window, $compile, modalSrvc, dataSrvc){
		'ngInject';

		return {
			restrict: 'A',
			templateUrl: paths.fsModal.views+'fs-modal.ng.html',
			link: function(scope, element, attrs){
				scope.modalSrvc = modalSrvc;
				
				scope.dataSrvc = dataSrvc;
				
				scope.overlayToggle = function(){
					
					if (!angular.element(element.find('.modal-overlay')[0]).hasClass('ng-animate')){
						modalSrvc.current.show = !modalSrvc.current.show;
					}
				};
				
				var fsModalHandler = null;
				var modalHeightHandler = null;
				var modalWidthHandler = null;
				
				var initialize = function(){
					toggleListeners(true);
				};
				
				var toggleListeners = function(enable){
					if(enable){
						scope.$on('$destroy', onDestroy);
						
						fsModalHandler = scope.$watch('modalSrvc.current.show', setModal);
						
						modalHeightHandler = scope.$watch(getHeight, setHeight);
						
						modalWidthHandler = scope.$watch(getWidth, setWidth);
						
					} else {
						fsModalHandler();
						modalHeightHandler();
						modalWidthHandler();
					}
				};
				
				var onDestroy = function(enable){
					toggleListeners(false);
				};
				
				var getElementFontSize = function(){
					return parseFloat(
						$window.getComputedStyle(element[0], null).getPropertyValue('font-size')
					);
				};
				
				var convertEm = function(value) {
					return value * getElementFontSize();
				};
				
				var getHeight = function(){
					return element[0].querySelector('.fs-modal').offsetHeight;
				};
				
				var getWidth = function(){
					return element[0].querySelector('.fs-modal').offsetWidth;
				};
				
				var setHeight = function(newVal, oldVal){
					if(!newVal) return;
					console.log('height: '+$window.innerHeight+'align: '+modalSrvc.current.modal_y_align);
					
					switch(modalSrvc.current.modal_y_align){
						case "center":
							scope.modal_y_coord = ($window.innerHeight - newVal)/2;
							break;
						case "bottom":
							scope.modal_y_coord = modalSrvc.current.toggle_y_coord + modalSrvc.current.toggle_y_dim;
							break;
						case "top":
							scope.modal_y_coord = modalSrvc.current.toggle_y_coord - newVal;
							break;
						}
				};
				
				var setWidth = function(newVal, oldVal){
					if(!newVal) return;
					console.log('width: '+$window.innerWidth);
					
					switch(modalSrvc.current.modal_x_align){
						case "center":
							scope.modal_x_coord = ($window.innerWidth - newVal)/2;
							break;
						case "left":
							scope.modal_x_coord = modalSrvc.current.toggle_x_coord;
							break;
						case "right":
							scope.modal_x_coord = modalSrvc.current.toggle_x_coord + (modalSrvc.current.toggle_x_dim - newVal);
							break;
						case "both":
							scope.modal_x_coord = modalSrvc.current.toggle_x_coord;
							scope.modal_x_dim = modalSrvc.current.toggle_x_dim;
							break;
					}
				};
				
				var setModal = function(newVal, oldVal){
					if(!modalSrvc.current.show) return;
					scope.card = modalSrvc.current.modal_card;
					scope.deck = modalSrvc.current.modal_deck;
					scope.modal_x_dim = modalSrvc.current.modal_x_dim;
					scope.modal_y_dim = modalSrvc.current.modal_y_dim;
					
					setHeight(scope.modal_x_dim);
					setWidth(scope.modal_y_dim);
					
					$compile(modalSrvc.current.modal_content)(scope);
					
					angular.element(element[0].querySelector('.fs-modal'))
						.empty()
						.append(modalSrvc.current.modal_content);
					
					angular.element(element.find('.fs-modal-content')[0])
						.removeClass('fs-modal-content')
						.addClass('fs-modal-slot');
					
				};
				
				initialize();
				
			}
		};
	});