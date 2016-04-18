Meteor.publish("npcDecks", function () {
  return NpcDecks.find({});
});