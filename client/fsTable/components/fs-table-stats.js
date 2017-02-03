angular.module('freedomsworn')
	.component('fsTableStats', {
		templateUrl: '/client/fsTable/components/fs-table-stats.html',
		controllerAs: 'vm',
		bindings: {
			card: '=',
			shownColumns: '=',
			details: '='
		},
		controller($scope, $reactive) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			var addValues = function(array){
				var returnValue = 0;
				for(var i = 0; i < array.length; i++){
					if(array[i])
					returnValue += array[i];
				}
				return returnValue;
			};
			
			this.actionBenefit = function(action){
				if(action.success && action.count){
					var benefit = 0;
					
					var benefitArray = [
						action.success.damage/2-1,
						action.success.enableMove,
						action.success.forceMove,
						action.success.enableAction,
						action.success.negateInjury, // remove?
						action.success.forceAction,
						action.success.attackCurse, // remove
						action.success.expelCurse, // remove
						action.success.trapCurse // remove
						// action.success.mettle
						// action.success.haste
						// action.success.cunning
						// action.success.courage
						// action.success.slowed
						// action.success.bleeding
						// action.success.hobbled
						// action.success.stunned
						
					];
					
					if(action.effect){
						if(action.effect.moveEffect) benefit += Math.ceil(action.effect.moveEffect/4);
					}
					
					for(var i = 0; i < benefitArray.length; i++){
						if(benefitArray[i])
						benefit += benefitArray[i];
					}
					
					if(action.attackModifier === ' + 1') benefit += 1;
					
					if(action.attackType.includes('Reflexive') && action.targetDetail === '2/1') benefit += 1;
					
					if(action.targetType.includes('Area')) benefit += 1;
					
					if(this.card.itemType.includes('/')){
						if(action.attackType.includes('voc')){
							benefit += 1;
						}
					}
					
					return benefit;
				} else {
					return '-';
				}
			};
			
			this.actionCost = function(action){
				if(action.success && action.count){
					var cost = 0;
					
					cost += action.count;
					
					if(this.card.itemSlot === 'Two-handed'){
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
			
			
			this.actionBenefit1 = this.actionBenefit(this.card.action1);
			this.actionCost1 = this.actionCost(this.card.action1);
			
			this.actionBenefit2 = this.actionBenefit(this.card.action2);
			this.actionCost2 = this.actionCost(this.card.action2);
			
			
			
		}
	});