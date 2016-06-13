angular.module("freedomsworn")
	.controller("FeatureDeckDetailsCtrl",
		function($scope, $meteor, $stateParams, CoreVars, dataSrvc){
			'ngInject';
			
			$scope.CoreVars = CoreVars;
			
			$scope.dataSrvc = dataSrvc;
			
			$reactive(this).attach($scope);
			
			this.subscribe('featureDecks');
			
			this.helpers({
				featureDeck(){
					return FeatureDecks.find({});
				}
			});
			
			
			
		});