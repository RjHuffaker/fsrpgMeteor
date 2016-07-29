angular.module('freedomsworn')
	.directive('diceBox',
		function(modalSrvc) {
			'ngInject';

			return {
				restrict: 'A',
				templateUrl: paths.diceModule.views+'dice-box.ng.html',
				scope: {
					deck: '='
				},
				link: function(scope, element, attrs){
					
					scope.chooseDie = function(order){
						modalSrvc.current.show = false;
						this.deck.chooseDie(order);
					};
					
				}
			};
		});