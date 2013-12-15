// Step 5- In views.js, define a ChatMessagesView that renders the
// #chat-messages-template with the passed in collection.

var ChatMessagesView = Backbone.View.extend ({
  tagName: 'div',
  className: 'messages', //as in <div class="messages"></div>
  render: function() {
    debugger
    var self = this;

    //compiles the template
    var source = $('#chat-messages-template').html();
    var template = Handlebars.compile(source);

    // render the template with the current collection data
    // match line 18 in index.html - {{#each messages}} will be passed our collection JSON data
    var rendered = template({messages: this.collection.toJSON()});

    // append the rendered HTML to the current view's element
    this.$el.append(rendered);
    return this;
  }


});