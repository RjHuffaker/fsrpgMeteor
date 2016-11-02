ForumPosts = new Mongo.Collection("forumPosts");

ForumPosts.allow({
	insert: function(userId, forumPost){
		return true;
		// return userId && forumPost.owner === userId;
	},
	update: function(userId, forumPost, fields, modifier){
		return true;
		// return userId && forumPost.owner === userId;
	},
	remove: function(userId, forumPost){
		return true;
		// return userId && forumPost.owner === userId;
	}
});