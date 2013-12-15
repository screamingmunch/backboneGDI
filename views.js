// Step 5- In views.js, define a ChatMessagesView that renders the
// #chat-messages-template with the passed in collection.

var ChatMessagesView = Backbone.View.extend ({
  tagName: 'div',
  className: 'messages', //as in <div class="messages"></div>
  // step10:  add a listener on the collection for the 'add' event
  // that re-renders the template.
  events:{
    ''
  }
  render: function() {
    var self = this;

    //compiles the template
    var source = $('#chat-messages-template').html();
    var template = Handlebars.compile(source);

    // render the template with the current collection data
    // match line 18 in index.html - {{#each messages}} will be passed our collection JSON data
    var rendered = template({messages: this.collection.toJSON()});

    // append the rendered HTML to the current view's element
    this.$el.append(rendered);
    //debugger
    return this;
  }

});

//Step 7- define a ChatFormView that renders the #chat-form-template.

var ChatFormView = Backbone.View.extend ({
  //step 9 -add an event for the click event on the submit button that creates
  // a new ChatMessage and adds it to the collection
  events: {
    'click .form-submit': 'newMessage'
  },
  render: function() {
    var self = this;

    var source = $('#chat-form-template').html();
    var template = Handlebars.compile(source);

    var rendered = template({messages: this.collection.toJSON()});
    this.$el.append(rendered);
    return this;
  },
  newMessage: function(e){
    e.preventDefault();
    var msg = $('.chat-form input[name="content"]').val();
    if (msg) {
      this.collection.add({text: msg});
      this.$('.chat-form input[name="content"]').val('');
    }
    console.log(this.collection);

  }

});