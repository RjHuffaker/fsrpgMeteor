angular.module("freedomsworn")
	.controller("ChronicleDetailsCtrl", 
		function($rootScope, $scope, $reactive, $stateParams, $location, chronicleBread){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('chronicles');
			
			this.chronicleId = $stateParams.chronicleId;
			
			this.helpers({
				chronicle(){
					return chronicleBread.read($stateParams.chronicleId);
				}
			});
			
			this.timer = 100;
			
			var timerInterval;
			
			this.togglePause = function(chronicle){
				
				var timestamp = new Date().getTime();
				
				if(chronicle.paused()){
					chronicle.timeline.push({ startTime: timestamp, timerSpeed: chronicle.timerSpeed });
				} else {
					chronicle.timeline[chronicle.timeline.length-1].stopTime = timestamp;
				}
				
			};
			
			this.resetTimer = function(chronicle){
				console.log('resetTimer');
				chronicle.timeline.length = 0;
				
				chronicle.startTime = new Date().getTime();
				
				this.timer = this.chronicle.timer ? this.chronicle.timer : 0;
				
				for(var i = 0; i < chronicle.players.length; i++){
					var player = chronicle.players[i];
					player.actions.length = 0;
					player.count = 0;
				}
			};
			
			var getAverage = function(num1, num2){
				return Math.round((num1+num2)/2);
			};
			
			var setTimer = function(){
				
				timerInterval = Meteor.setInterval(function(){
					
					$scope.vm.timer = $scope.vm.chronicle.getTimeElapsed($scope.vm.chronicle.startTime, new Date().getTime());
					
					
					
					$scope.vm.chronicle.setPlayerCount();
					
					$scope.$apply();
					
				}, 25);
				
				if($scope.vm.chronicle){
					$scope.vm.chronicle.startTime = new Date().getTime();
				}
				
			};
			
			if($scope.vm.chronicle){
				setTimer();
			}
			
			$scope.$on('$destroy', function(){
				Meteor.clearInterval(timerInterval);
			});
			
		});