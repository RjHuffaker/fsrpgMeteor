Meteor.publish("pcDecks", function () {
  return PcDecks.find({});
});