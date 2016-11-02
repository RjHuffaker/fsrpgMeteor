Meteor.publish("forumTopics", function () {
  return ForumTopics.find({});
});