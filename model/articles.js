Articles = new Mongo.Collection("articles");

Articles.allow({
	insert: function(userId, article){
		return true;
		// return userId && article.owner === userId;
	},
	update: function(userId, article, fields, modifier){
		return true;
		// return userId && article.owner === userId;
	},
	remove: function(userId, article){
		return true;
		// return userId && article.owner === userId;
	}
});