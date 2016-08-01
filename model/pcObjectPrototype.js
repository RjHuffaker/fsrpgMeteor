pcObject = function(doc) {
  _.extend(this, doc);
};

_.extend(pcObject.prototype, {
  chooseAbility: function(ability){
		this.chosenAbility = ability;
	},
	
	chooseDie: function(order){
		var chosenDie = this.dicepool[order];
		var previousDie = this.chosenAbility.dice;
		this.dicepool[order] = this.dicepool[0];
		
		if(previousDie.order > 0){
			this.dicepool[previousDie.order] = previousDie;
		}
		
		this.abilities[this.chosenAbility.order].dice = chosenDie;
		
		switch(this.chosenAbility.order){
			case 0:
			case 1:
				this.factorBlock();
				this.factorHealth();
				this.factorStamina();
				this.factorCarryingCapacity();
				break;
			case 2:
			case 3:
				this.factorDodge();
				break;
			case 4:
			case 5:
				this.factorAlertness();
				break;
			case 6:
			case 7:
				this.factorTenacity();
				break;
		}
		
	},
	
	factorBlock: function(){
		var dice_a = this.abilities[0].dice;
		var dice_b = this.abilities[1].dice;
		if (Number(dice_a.sides) > Number(dice_b.sides)){
			this.block = '2' + dice_a.name;
		} else {
			this.block = '2' + dice_b.name;
		}
	},
	
	factorDodge: function(){
		var dice_a = this.abilities[2].dice;
		var dice_b = this.abilities[3].dice;
		if (Number(dice_a.sides) > Number(dice_b.sides)){
			this.dodge = '2' + dice_a.name;
		} else {
			this.dodge = '2' + dice_b.name;
		}
	},
	
	factorAlertness: function(){
		var dice_a = this.abilities[4].dice;
		var dice_b = this.abilities[5].dice;
		if (Number(dice_a.sides) > Number(dice_b.sides)){
			this.alertness = '2' + dice_a.name;
		} else {
			this.alertness = '2' + dice_b.name;
		}
	},
	
	factorTenacity: function(){
		var dice_a = this.abilities[6].dice;
		var dice_b = this.abilities[7].dice;
		if (Number(dice_a.sides) > Number(dice_b.sides)){
			this.tenacity = '2' + dice_a.name;
		} else {
			this.tenacity = '2' + dice_b.name;
		}
	},
	
	factorExperience: function(){
		var _level = 0;
		var _experience = Number(this.experience);
		for (var increment = 8; increment <= _experience; increment++){
			_level++;
			_experience = _experience - increment;
		}
		this.level = _level;
	},
	
	factorHealth: function(){
		this.healthLimit = 
			Math.round(
				(Number(this.abilities[0].dice.sides) +
					Number(this.abilities[1].dice.sides)
				) * ((this.level || 0)/16 + 1));
		this.healthCurrent =
			Number(this.healthLimit - this.injury);
	},
	
	factorStamina: function(){
		this.staminaLimit = 
			Math.round(
				(Number(this.abilities[0].dice.sides) +
					Number(this.abilities[1].dice.sides)
				) * ((this.level || 0)/16 + 1));
		this.staminaCurrent =
			Number(this.healthLimit - this.injury);
	},
	
	factorCarryingCapacity: function(){
		this.carryCurrent = 0;
		this.carryLimit =
			Number(this.abilities[0].dice.sides) +
			Number(this.abilities[1].dice.sides);
	},
	
	factorTraits: function(){
		this.traitLimit = Math.floor((this.level || 0) / 4 + 1);
		
		if(this.traitLimit > this.getCardCount('Trait')){
			console.log('Add Traits');
		} else if(this.traitLimit < this.getCardCount('Trait')){
			console.log('Remove Traits');
		}
		
	},
	
	factorFeats: function(){
		this.featLimit = Math.ceil((this.level) / 4) || 0;
		this.featDeck = this.level;
		
		if(this.featLimit > this.getCardCount('Feat')){
			console.log('Add Feats');
		} else if(this.featLimit < this.getCardCount('Feat')){
			console.log('Remove Feats');
		}
		
	},
	
	factorAugments: function(){
		this.augmentLimit = Math.round((this.level || 0) / 4);
		
		if(this.augmentLimit > this.getCardCount('Augment')){
			console.log('Add Augments');
		} else if(this.augmentLimit < this.getCardCount('Augment')){
			console.log('Remove Augments');
		}
		
	},
	
	getCardCount: function(cardType){
		var count = 0;
		for(var i = 0; i < this.cardList.length; i++){
			if(this.cardList[i])
			if(this.cardList[i].cardType === cardType) count++;
		}
		return count;
	}
});