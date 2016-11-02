ForumThreads = new Mongo.Collection("forumThreads");

ForumThreads.allow({
	insert: function(userId, forumThread){
		return true;
		// return userId && forumThread.owner === userId;
	},
	update: function(userId, forumThread, fields, modifier){
		return true;
		// return userId && forumThread.owner === userId;
	},
	remove: function(userId, forumThread){
		return true;
		// return userId && forumThread.owner === userId;
	}
});