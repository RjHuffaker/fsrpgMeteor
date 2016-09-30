Chronicles = new Mongo.Collection("chronicles", {
	transform: function(doc){
		return new chronicleObject(doc);
	}
});

Chronicles.allow({
	insert: function(userId, chronicle){
		return true;
		// return userId && chronicle.owner === userId;
	},
	update: function(userId, chronicle, fields, modifier){
		return true;
		// return userId && chronicle.owner === userId;
	},
	remove: function(userId, chronicle){
		return true;
		// return userId && chronicle.owner === userId;
	}
});