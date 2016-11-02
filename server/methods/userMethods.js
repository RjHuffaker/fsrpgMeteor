Meteor.methods({
	userInsert: function (doc) {
		// Add account
		id = Accounts.createUser({
			username: doc.username,
			password: doc.password,
			profile: doc.profile
		});
		
		return id;
	},
	userUpdate: function (id, doc) {
		
		// Update account
		Meteor.users.update(id, {
			$set: {
				username: doc.username,
				profile: doc.profile
			}
		});
		
		// Update password
		if (doc.password != 'the same') {
			Accounts.setPassword(id, doc.password);
		}
		
		return true;
	},
	userRemove: function (id) {
		Meteor.users.remove(id);
		
		return id;
	}
});