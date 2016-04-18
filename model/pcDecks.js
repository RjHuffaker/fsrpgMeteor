PcDecks = new Mongo.Collection("pcDecks");

PcDecks.allow({
	insert: function(userId, pcDeck){
    return true;
    // return userId && pcDeck.owner === userId;
  },
  update: function(userId, pcDeck, fields, modifier){
    return true;
    // return userId && pcDeck.owner === userId;
  },
  remove: function(userId, pcDeck){
    return true;
    // return userId && pcDeck.owner === userId;
  }
});