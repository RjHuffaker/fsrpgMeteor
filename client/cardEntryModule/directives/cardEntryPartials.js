angular.module('freedomsworn')
	.directive('cardEntry', ['dataSrvc', function(dataSrvc){
		return {
			restrict: 'A',
			templateUrl: paths.cardEntryModule.views+'card-entry.ng.html',
			scope: {
				cardEntry: '=', panel: '='
			},
			link: function(scope, element, attrs){
				scope.dataSrvc = dataSrvc;
			}
		};
	}])
	.directive('cardEntryIcon', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardEntryModule.views+'card-entry-icon.ng.html'
		};
	})
	.directive('cardEntryTitle', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardEntryModule.views+'card-entry-title.ng.html'
		};
	})
	.directive('cardEntryKeywords', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardEntryModule.views+'card-entry-keywords.ng.html'
		};
	})
	.directive('cardEntryPrompt', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardEntryModule.views+'card-entry-prompt.ng.html'
		};
	})
	.directive('cardEntryEffect', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardEntryModule.views+'card-entry-effect.ng.html'
		};
	})
	.directive('cardEntryAttack', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardEntryModule.views+'card-entry-attack.ng.html'
		};
	})
	.directive('cardEntryDefense', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardEntryModule.views+'card-entry-defense.ng.html'
		};
	});