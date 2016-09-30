FeatureDecks = new Mongo.Collection("featureDecks", {
	transform: function(doc){
		return new deckObject(doc);
	}
});

FeatureDecks.allow({
	insert: function(userId, featureDeck){
		return true;
		// return userId && featureDeck.owner === userId;
	},
	update: function(userId, featureDeck, fields, modifier){
		return true;
		// return userId && featureDeck.owner === userId;
	},
	remove: function(featureDeck){
		return true;
		// return userId && featureDeck.owner === userId;
	}
});