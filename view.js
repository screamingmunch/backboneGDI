// Step 5- In views.js, define a ChatMessagesView that renders the
// #chat-messages-template with the passed in collection.

var ChatMessagesView = Backbone.View.extend ({
  tagName: 'div',
  className: 'messages', //
  render: function() {
    var self = this;
    var source = $('#chat-messages-template').html();
    var template = Handlebars.compile(source);
    var rendered = template({messages: this.collection.toJSON()});
    this.$el.append(rendered);
    return this;
  }


});