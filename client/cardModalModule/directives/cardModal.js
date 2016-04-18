'use strict';

angular.module('freedomsworn')
	.directive('cardModal', ['$window', '$compile', 'modalSrvc', 'dataSrvc',
		function($window, $compile, modalSrvc, dataSrvc){
			return {
				restrict: 'A',
				templateUrl: paths.cardModalModule.views+'card-modal.ng.html',
				link: function(scope, element, attrs){
					scope.modalSrvc = modalSrvc;
					
					scope.dataSrvc = dataSrvc;
					
					var modal = {};
					
					var cardModalHandler = null;
					var modalHeightHandler = null;
					var modalWidthHandler = null;
					
					var initialize = function(){
						toggleListeners(true);
					};
					
					var toggleListeners = function(enable){
						if(enable){
							scope.$on('$destroy', onDestroy);
							
							cardModalHandler = scope.$watch('modalSrvc.current.show', setModal);
							
							modalHeightHandler = scope.$watch(getHeight, setHeight);
							
							modalWidthHandler = scope.$watch(getWidth, setWidth);
							
						} else {
							cardModalHandler();
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
						return element[0].querySelector('.card-modal').offsetHeight;
					};
					
					var getWidth = function(){
						return element[0].querySelector('.card-modal').offsetWidth;
					};
					
					var setHeight = function(newVal, oldVal){
						if(!newVal) return;
						switch(modal.modal_y_align){
							case "bottom":
								scope.modal_y_coord = modal.toggle_y_coord + modal.toggle_y_dim;
								break;
							case "top":
								scope.modal_y_coord = modal.toggle_y_coord - newVal;
								break;
							}
					};
					
					var setWidth = function(newVal, oldVal){
						if(!newVal) return;
						switch(modal.modal_x_align){
							case "left":
								scope.modal_x_coord = modal.toggle_x_coord;
								break;
							case "right":
								scope.modal_x_coord = modal.toggle_x_coord + (modal.toggle_x_dim - newVal);
								break;
							case "both":
								scope.modal_x_coord = modal.toggle_x_coord;
								scope.modal_x_dim = modal.toggle_x_dim;
								break;
						}
					};
					
					var setModal = function(newVal, oldVal){
						if(!modalSrvc.current.show) return;
						modal = modalSrvc.current;
						scope.card = modalSrvc.current.modal_card;
						scope.modal_x_dim = modalSrvc.current.modal_x_dim;
						scope.modal_y_dim = modalSrvc.current.modal_y_dim;
						
						$compile(modalSrvc.current.modal_content)(scope);
						
						angular.element(element[0].querySelector('.card-modal'))
							.empty()
							.append(modalSrvc.current.modal_content);
						
						angular.element(element.find('.card-modal-content')[0])
							.removeClass('card-modal-content')
							.addClass('card-modal-slot');
							
					};
					
					initialize();
				
				}
			};
		}]);