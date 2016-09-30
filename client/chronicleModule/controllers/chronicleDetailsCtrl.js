angular.module("freedomsworn")
	.controller("ChronicleDetailsCtrl", 
		function($rootScope, $scope, $reactive, $stateParams, $location, $interval, chronicleBread){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('chronicles');
			
			this.chronicleId = $stateParams.chronicleId;
			
			this.helpers({
				chronicle(){
					return chronicleBread.read($stateParams.chronicleId);
				}
			});
			
			this.togglePause = function(chronicle, timeStamp){
				console.log(chronicle);
				if(chronicle.timeline.length === 0){
					console.log('start clock', $scope.vm.clock);
					chronicle.timeline.push({ startTime: timeStamp });
				} else if(chronicle.paused()){
					console.log('unpause');
					chronicle.timeline.push({ startTime: timeStamp });
				} else {
					console.log('pause');
					chronicle.timeline[chronicle.timeline.length-1].stopTime = timeStamp;
				}
			};
			
			this.resetTimer = function(chronicle){
				console.log('resetTimer');
				chronicle.timeline.length = 0;
				
				$scope.vm.timer = $scope.vm.chronicle.timer ? $scope.vm.chronicle.timer : 0;
				
				for(var i = 0; i < chronicle.players.length; i++){
					var player = chronicle.players[i];
					player.actions.length = 0;
					player.count = 0;
				}
			};
			
			var timer;
			
			var getAverage = function(num1, num2){
				return Math.round((num1+num2)/2);
			};
			
			var setTimer = function(){
				if(timer) $interval.cancel(timer);
				
				if($scope.vm.chronicle){
					$scope.vm.timer = $scope.vm.chronicle.timer;
					
					
				}
				
				timer = $interval(function(){
					if($scope.vm.chronicle){
						
						$scope.vm.timer += $scope.vm.chronicle.clockSpeed;
						
						$scope.vm.chronicle.timer = getAverage($scope.vm.chronicle.timer, $scope.vm.timer);
						
						$scope.vm.chronicle.setPlayerCount();
					}
				}, 100);
			};
			
			setTimer();
			
			$scope.$on('$destroy', function(){
				$interval.cancel(timer);
			});
			
		});