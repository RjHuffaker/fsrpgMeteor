angular.module('freedomsworn')
	.factory('pcBread', function($rootScope, $meteor, $location, $timeout, pcDefault){
		'ngInject';
		
		var service = {};
		
		service.browse = function(){
			return PcDecks.find({});
		};
		
		service.read = function(deckId){
			return $meteor.object(PcDecks, deckId, false);
		};
		
		service.edit = function(deck){
			if(deck._id){
				deck.lastModified = new Date();
				deck.save();
			} else if($rootScope.currentUser){
				deck.owner = $rootScope.currentUser._id;
				PcDecks.insert(deck);
			} else {
				console.log('Error: Not Logged In');
			}
		};
		
		service.add = function(){
			var newDeck = pcDefault;
			
			newDeck._id = Random.id();
			newDeck.owner = $rootScope.currentUser._id;
			newDeck.createdOn = new Date();
			newDeck.lastModified = new Date();
			
			newDeck = new pcObject(new deckObject(newDeck));
			
			newDeck.setCardList();
			
			newDeck.setPanelPosition();
			
			PcDecks.insert(newDeck, function(error, result){
				if(error){
					console.log(error);
				} else if(result) {
					$timeout(function(){
						$location.path('/pcDecks/'+result);
					}, 0);
				}
			});
		};
		
		service.delete = function(deckId){
			PcDecks.remove(deckId);
		};
		
		return service;
		
	});