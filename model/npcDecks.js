NpcDecks = new Mongo.Collection("npcDecks");

NpcDecks.allow({
	insert: function(userId, npcDeck){
    return true;
    // return userId && npcDeck.owner === userId;
  },
  update: function(userId, npcDeck, fields, modifier){
    return true;
    // return userId && npcDeck.owner === userId;
  },
  remove: function(userId, pcDeck){
    return true;
    // return userId && npcDeck.owner === userId;
  }
});