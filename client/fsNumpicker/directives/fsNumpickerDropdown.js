angular.module('freedomsworn')
	.directive('fsNumpickerDropdown', function(){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				numlabel: '=',
				numvalue: '=',
				numvaluemin: '=',
				numvaluemax: '=',
				numincrement: '=',
				numdefault: '=',
				numdelay: '=',
				callback: '='
			},
			templateUrl: paths.fsNumpicker.views+'fs-numpicker-dropdown.ng.html',
			link: function(scope, element, attrs){
				
			}
		};
	});