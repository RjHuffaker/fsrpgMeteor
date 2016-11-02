ForumCategories = new Mongo.Collection("forumCategories");

ForumCategories.allow({
	insert: function(userId, forumCategory){
		return true;
		// return userId && forumCategory.owner === userId;
	},
	update: function(userId, forumCategory, fields, modifier){
		return true;
		// return userId && forumCategory.owner === userId;
	},
	remove: function(userId, forumCategory){
		return true;
		// return userId && forumCategory.owner === userId;
	}
});

