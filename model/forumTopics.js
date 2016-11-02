ForumTopics = new Mongo.Collection("forumTopics");

ForumTopics.allow({
	insert: function(userId, forumTopic){
		return true;
		// return userId && forumTopic.owner === userId;
	},
	update: function(userId, forumTopic, fields, modifier){
		return true;
		// return userId && forumTopic.owner === userId;
	},
	remove: function(userId, forumTopic){
		return true;
		// return userId && forumTopic.owner === userId;
	}
});