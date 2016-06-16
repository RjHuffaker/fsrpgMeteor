angular.module('freedomsworn')
	.directive('cardPc1', ['$location', 'pcBread', function($location, pcBread){
		return {
			restrict: 'A',
			templateUrl: paths.pcModule.views+'card-pc-1.ng.html',
			link: function(scope, element, attrs) {
				scope.editPc = function(deck){
					pcBread.edit(deck);
				};
				
				scope.exitPc = function(){
					$location.path('/pcDecks');
				};
			}
		};
	}])
	.directive('cardPc2', function(){
		return {
			restrict: 'A',
			templateUrl: paths.pcModule.views+'card-pc-2.ng.html'
		};
	})
	.directive('cardPc3', function(){
		return {
			restrict: 'A',
			templateUrl: paths.pcModule.views+'card-pc-3.ng.html'
		};
	});