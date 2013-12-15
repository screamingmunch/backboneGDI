// Create a ChatMessage object that extends BackboneModel,
// and give it defaults for the 'author' and 'text' attributes
// of 'Unknown' and '', respectively. Additionally,
// give the model a default 'time' of the current time in
// milliseconds using (new Date()).getTime().

var ChatMessage = Backbone.Model.extend({
  defaults: {
    author: "Unknown",
    text: "",
    time: (new Date()).getTime()
  },
  getPurified: function(){

  }


})

// Add a getPurified method to ChatMessage that replaces swear
// words in the 'text' attribute with asterisks and returns the
// purified message.

// Create a ChatMessages object that extends BackboneCollection
//  to hold ChatMessage models,
// and make it sort by the 'time' attribute by default.

var ChatMessages = Backbone.Collection.extend({
  model: ChatMessage,
  comparator: function(model) {
    return model.get('time');
  }
});