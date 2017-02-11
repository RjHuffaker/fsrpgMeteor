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
						action.success.damage,
						action.success.mettle,
						action.success.slowed,
						action.success.haste,
						action.success.bleeding,
						action.success.cunning,
						action.success.hobbled,
						action.success.courage,
						action.success.stunned
					];
					
					for(var i = 0; i < benefitArray.length; i++){
						if(benefitArray[i])
						benefit += benefitArray[i];
					}
					
					if(action.attackModifier === ' + 1') benefit += 1;
					
					if(action.attackType)
					if(action.attackType.includes('Reflexive') && action.targetDetail === '2/1') benefit += 1;
					
					if(action.targetType)
					if(action.targetType.includes('Area')) benefit += 1;
					
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