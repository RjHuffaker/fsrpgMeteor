Meteor.publish("forumPosts", function () {
  return ForumPosts.find({});
});