angular.module('freedomsworn')
	.factory('PcFeature', [
		function(){
			
			var service = {};
			
			service.factorTraitLimit = function(pcDeck){
				pcDeck.traitLimit = Math.floor((pcDeck.level || 0) / 4 + 1);
			};
			
			service.factorFeatLimit = function(pcDeck){
				pcDeck.featLimit = Math.ceil((pcDeck.level) / 4) || 0;
				pcDeck.featDeck = pcDeck.level;
			};
			
			service.factorAugmentLimit = function(pcDeck){
				pcDeck.augmentLimit = Math.round((pcDeck.level || 0) / 4);
			};
			
			return service;
		}]);