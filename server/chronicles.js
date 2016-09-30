Meteor.publish("chronicles", function () {
  return Chronicles.find({});
});