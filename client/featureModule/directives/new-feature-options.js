angular.module('freedomsworn')
	.directive('newFeatureOptions', ['$location', 'CoreVars', 'featureBread',
		function($location, CoreVars, featureBread){
			return {
				restrict: 'A',
				templateUrl: paths.featureModule.views+'new-feature-options.ng.html',
				link: function(scope, element, attrs){
					
					scope.deck = featureBread.newDeck;
					
					scope.addNewDeck = function(){
						$location.path('/featureDecks');
						CoreVars.modalBox = '';
						featureBread.add();
					};
					
				}
			};
		}]);