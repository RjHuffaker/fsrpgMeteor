Meteor.publish("ruleSets", function () {
  return RuleSets.find({});
});