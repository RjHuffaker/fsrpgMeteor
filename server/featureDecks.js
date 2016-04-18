Meteor.publish("featureDecks", function(){
  return FeatureDecks.find({});
});