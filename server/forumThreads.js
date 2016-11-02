Meteor.publish("forumThreads", function () {
  return ForumThreads.find({});
});