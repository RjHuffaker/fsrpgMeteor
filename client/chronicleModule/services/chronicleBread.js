angular.module('freedomsworn')
	.factory('chronicleBread', function($rootScope, $meteor, $location, $timeout){
		'ngInject';
		
		var service = {};
		
		service.browse = function(){
			return Chronicles.find({});
		};
		
		service.read = function(chronicleId){
			return $meteor.object(Chronicles, chronicleId, true);
		};
		
		service.edit = function(chronicle){
			if(chronicle._id){
				chronicle.lastModified = new Date();
				chronicle.save();
			} else if($rootScope.currentUser){
				chronicle.owner = $rootScope.currentUser._id;
				Chronicles.insert(chronicle);
			} else {
				console.log('Error: Not Logged In');
			}
		};
		
		service.add = function(){
			var newChronicle = {
				name: 'A New Chronicle',
				timer: 0,
				clockSpeed: 100,
				startTime: new Date().getTime(),
				pauseOnAction: true,
				timeline: [],
				players: [
					{count: 0, timer: undefined, actions: []},
					{count: 0, timer: undefined, actions: []},
					{count: 0, timer: undefined, actions: []}
				]
			};
			
			newChronicle._id = Random.id();
			newChronicle.owner = $rootScope.currentUser._id;
			newChronicle.createdOn = new Date();
			newChronicle.lastModified = new Date();
			
			newChronicle = new chronicleObject(newChronicle);
			
			Chronicles.insert(newChronicle, function(error, result){
				if(error){
					console.log(error);
				} else if(result) {
					console.log(result);
					$timeout(function(){
						$location.path('/chronicles/'+result);
					}, 0);
				}
			});
		};
		
		service.delete = function(chronicleId){
			Chronicles.remove(chronicleId);
		};
		
		return service;
		
	});