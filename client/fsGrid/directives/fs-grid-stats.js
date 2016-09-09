angular.module('freedomsworn')
	.directive('fsGridStats', function(dataSrvc){
		'ngInject';
		
		return {
			restrict: 'A',
			scope: {
				gridCard: '=fsGridStats'
			},
			templateUrl: paths.fsGrid.views+'fs-grid-stats.ng.html',
			link: function(scope, element, attrs) {
				
				var addValues = function(array){
					var returnValue = 0;
					for(var i = 0; i < array.length; i++){
						if(array[i])
						returnValue += array[i];
					}
					return returnValue;
				};
				
				scope.actionBenefit = function(action){
					if(action.success && action.count){
						var benefit = 0;
						
						var benefitArray = [
							action.success.damage/2-1,
							action.success.enableMove,
							action.success.forceMove,
							action.success.enableAction,
							action.success.negateInjury,
							action.success.forceAction,
							action.success.attackCurse,
							action.success.expelCurse,
							action.success.trapCurse
						];
						
						for(var i = 0; i < benefitArray.length; i++){
							if(benefitArray[i])
							benefit += benefitArray[i];
						}
						
						if(action.attackModifier === ' + 1') benefit += 1;
						
						if(action.attackType.includes('Reflexive') && action.targetDetail === '2/1') benefit += 1;
						
						if(action.targetType.includes('Area')) benefit += 1;
						
						if(scope.gridCard.itemType.includes('/')){
							if(action.attackType.includes('voc')){
								benefit += 1;
							}
						}
						
						return benefit;
					} else {
						return '-';
					}
				};
				
				scope.actionCost = function(action){
					if(action.success && action.count){
						var cost = 0;
						
						cost += action.count;
						
						if(scope.gridCard.itemSlot === 'Two-handed'){
							if(action.attackType.includes('voc')){
								cost += 2;
							} else {
								cost += 1;
							}
						}
						
						if(action.attackType.includes('voc')){
							cost += 1;
						}
						
						return cost;
					} else {
						return '-';
					}
				};
				
				
				scope.actionBenefit1 = scope.actionBenefit(scope.gridCard.action1);
				scope.actionCost1 = scope.actionCost(scope.gridCard.action1);
				
				scope.actionBenefit2 = scope.actionBenefit(scope.gridCard.action2);
				scope.actionCost2 = scope.actionCost(scope.gridCard.action2);
				
				
			}
		};
	});