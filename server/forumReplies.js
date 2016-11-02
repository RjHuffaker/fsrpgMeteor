Meteor.publish("forumReplies", function () {
  return ForumReplies.find({});
});