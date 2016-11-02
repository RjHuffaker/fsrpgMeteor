ForumReplies = new Mongo.Collection("forumReplies");

ForumReplies.allow({
	insert: function(userId, forumReply){
		return true;
		// return userId && forumReply.owner === userId;
	},
	update: function(userId, forumReply, fields, modifier){
		return true;
		// return userId && forumReply.owner === userId;
	},
	remove: function(userId, forumReply){
		return true;
		// return userId && forumReply.owner === userId;
	}
});