// Step 1- Create a ChatMessage object that extends BackboneModel,
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
  // Step 3- Add a getPurified method to ChatMessage that replaces swear
  // words in the 'text' attribute with asterisks and returns the
  // purified message.
  getPurified: function() {
     // Worst purification method ever
     // See: http://www.codinghorror.com/blog/2008/10/obscenity-filters-bad-idea-or-incredibly-intercoursing-bad-idea.html
     var purifiedString = this.get('text').replace(/shit|damn|crap/, '****');
     this.set('text', purifiedString);
     return purifiedString;
  },
  initialize: function() {
    this.getPurified();
  }

})



// Step 2- Create a ChatMessages object that extends BackboneCollection
//  to hold ChatMessage models,
// and make it sort by the 'time' attribute by default.

var ChatMessages = Backbone.Collection.extend({
  model: ChatMessage,
  comparator: function(message) {
    return message.get('time');
  }
});