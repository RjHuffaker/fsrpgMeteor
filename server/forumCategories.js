Meteor.publish("forumCategories", function () {
  return ForumCategories.find({});
});