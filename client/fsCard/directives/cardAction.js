angular.module('freedomsworn')
	.directive('cardAction', function(dataSrvc){
		'ngInject';

		return {
			restrict: 'A',
			templateUrl: paths.fsCard.views+'card-action.ng.html',
			scope: {
				cardAction: '='
			},
			link: function(scope, element, attrs){
				scope.dataSrvc = dataSrvc;
			}
		};
	});