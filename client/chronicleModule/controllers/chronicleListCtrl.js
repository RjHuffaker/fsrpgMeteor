angular.module("freedomsworn")
	.controller("ChronicleListCtrl", 
		function($scope, $rootScope, $reactive, chronicleBread){
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.subscribe('chronicles');
			
			this.currentRow ='';
			
			this.helpers({
				chronicleList(){
					return chronicleBread.browse();
				}
			});
			
			this.selectRow = function(row){
				this.currentRow = row;
				console.log(row);
			};
			
			this.addChronicle = function(){
				chronicleBread.add();
			};
			
			this.deleteChronicle = function(chronicle){
				chronicleBread.delete(chronicle._id);
			};
			
		});