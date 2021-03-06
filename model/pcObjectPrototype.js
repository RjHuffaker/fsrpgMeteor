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
	
	factorSkills: function(){
		this.skillMax = Math.ceil(this.level/4);
		this.skillPoints = this.level;
		
		console.log('factorSkills');
		
		for(var i = 0; i < this.skills.length; i++){
			var skill = this.skills[i];
			this.skillPoints -= skill;
		}
		
		if(this.skillPoints < 0){
			console.log('Error: negative skillPoints');
		}
		
	},
	
	factorCarryingCapacity: function(){
		this.carryCurrent = 0;
		this.carryLimit =
			Number(this.abilities[0].dice.sides) +
			Number(this.abilities[1].dice.sides);
		//+ this.carryModifier;
	},
	
	factorTraits: function(){
		this.traitLimit = Math.floor((this.level || 0) / 4 + 1);
		var _traitCount = this.getCardCount('Trait')
		
		if(this.traitLimit - _traitCount > 0){
			for(var i = _traitCount; i < this.traitLimit; i++){
				var newCard = {
					_id: Random.id(),
					cardType: 'Choose Trait',
					cardLevel: i * 4,
					x_dim: 15,
					y_dim: 21,
					name: 'Choose Trait'
				}
				this.addToDeck(newCard);
				
				this.setPanelPosition();
			}
		}
	},
	
	factorFeats: function(){
		this.featLimit = Math.ceil((this.level || 0) / 4);
		this.featDeck = this.level;
		
		var _featCount = this.getCardCount('Feat')
		
		if(this.featDeck - _featCount > 0){
			for(var i = _featCount; i < this.featDeck; i++){
				var newCard = {
					_id: Random.id(),
					cardType: 'Choose Feat',
					cardLevel: i + 1,
					x_dim: 15,
					y_dim: 21,
					name: 'Choose Feat'
				}
				this.addToDeck(newCard);
				
				this.setPanelPosition();
			}
		}
	},
	
	factorAugments: function(){
		this.augmentLimit = Math.round((this.level || 0) / 4);
		var _augmentCount = this.getCardCount('Augment')
		
		if(this.augmentLimit - _augmentCount > 0){
			for(var i = _augmentCount; i < this.augmentLimit; i++){
				var newCard = {
					_id: Random.id(),
					cardType: 'Choose Augment',
					cardLevel: (i * 4) + 2,
					x_dim: 15,
					y_dim: 21,
					name: 'Choose Augment'
				}
				this.addToDeck(newCard);
				
				this.setPanelPosition();
			}
		}
	},
	
	factorFeatureCards: function(){
		this.factorClass();
		this.factorFaction();
		this.factorRace();
		this.factorDurability();
		this.factorSpeed();
		this.factorDamageModifier();
	},
	
	factorClass: function(){
		var _classList = [];
		for(var i = 0; i < this.cardList.length; i++){
			var _test = this.cardList[i];
			if(_test.cardType === 'Trait' && _test.aspect.cardType === 'Class'){
				_classList.push(_test.aspect);
			}
		}
		this.class = _classList;
	},
	
	factorFaction: function(){
		var _factionList = [];
		for(var i = 0; i < this.cardList.length; i++){
			var _test = this.cardList[i];
			if(_test.cardType === 'Trait' && _test.aspect.cardType === 'Faction'){
				_factionList.push(_test.aspect);
			}
		}
		this.faction = _factionList;
	},
	
	factorRace: function(){
		var _raceList = [];
		var _startingRace = {
			name: 'Weolda',
			baseDurability: 4
		};
		for(var i = 0; i < this.cardList.length; i++){
			var _test = this.cardList[i];
			if(_test.cardType === 'Trait' && _test.aspect.cardType === 'Race'){
				_raceList.push(_test);
				if(_test.cardLevel === 0){
					_startingRace = _test.aspect;
				}
			}
		}
		
		for(var i = 0; i < _raceList.length; i++){
			var _test = _raceList[i];
			if(_test.aspect !== _startingRace){
				console.log('race error');
				this.removeFromDeck(_test);
			}
		}
		
		this.race = _startingRace;
	},
	
	factorDurability: function(){
		var _baseModifiers = [];
		var _totalModifiers = [];
		
		this.baseDurability = this.race.baseDurability;
		
		for(var i = 0; i < this.cardList.length; i++){
			var _test = this.cardList[i]
			var _modifier = _test.durabilityModifier;
			if(!isNaN(parseFloat(_modifier)) && isFinite(_modifier)){
				if(_test.cardType === 'Trait'){
					_baseModifiers.push(_modifier);
				} else {
					_totalModifiers.push(_modifier);
				}
			}
		}
		
		for(var i = 0; i < _baseModifiers.length; i++){
			this.baseDurability += _baseModifiers[i];
		}
		
		this.totalDurability = this.baseDurability;
		
		for(var i = 0; i < _totalModifiers.length; i++){
			this.totalDurability += _totalModifiers[i];
		}
		
	},
	
	factorSpeed: function(){
		this.moveSpeed = this.race.baseMoveSpeed;
		for(var i = 0; i < this.cardList.length; i++){
			var _modifier = this.cardList[i].moveSpeedModifier;
			if(!isNaN(parseFloat(_modifier)) && isFinite(_modifier)){
				this.moveSpeed += _modifier;
			}
		}
	},
	
	factorDamageModifier: function(){
		this.damageModifier = this.race.damageModifier;
		for(var i = 0; i < this.cardList.length; i++){
			var _modifier = this.cardList[i].damageModifier;
			if(!isNaN(parseFloat(_modifier)) && isFinite(_modifier)){
				this.damageModifier += _modifier;
			}
		}
	},
	
	getCardCount: function(cardType){
		var count = 0;
		for(var i = 0; i < this.cardList.length; i++){
			if(this.cardList[i].cardType.includes(cardType)){
				count++;
			}
		}
		return count;
	},
	
	pruneDeck: function(){
		var toBeRemoved = [];
		
		for(var i = 0; i < this.cardList.length; i++){
			_test = this.cardList[i];
			//console.log('prune?', _test.name, _test.cardType, _test.cardLevel, this.level);
			if(this.level < _test.cardLevel){
				toBeRemoved.push(_test);
			}
		}
		
		for(var i = 0; i < toBeRemoved.length; i++){
			this.removeFromDeck(toBeRemoved[i]);
		}
		
		this.setPanelPosition();  
	}
	
	
	
});