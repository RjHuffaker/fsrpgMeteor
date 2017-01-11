angular.module('freedomsworn')
	.filter('customDate', function($filter) {
		return function(input) {
			if(input){
				var elapsed = Date.now() - input;
				
				if(elapsed > 86400000){
					return $filter('date')( input, "dd/MM/yyyy" );
				} else if(elapsed > 3600000){
					return Math.floor(elapsed / 3600000) + ' hours ago';
				} else if(elapsed > 60000){
					return Math.floor(elapsed / 60000) + ' minutes ago';
				} else {
					return Math.floor(elapsed / 1000) + ' seconds ago';
				}
			}
		}
});