RuleSets = new Mongo.Collection("ruleSets");

RuleSets.allow({
	insert: function(userId, ruleSet){
		return true;
		// return userId && ruleSet.owner === userId;
	},
	update: function(userId, ruleSet, fields, modifier){
		return true;
		// return userId && ruleSet.owner === userId;
	},
	remove: function(userId, ruleSet){
		return true;
		// return userId && ruleSet.owner === userId;
	}
});