// Step 4 -create an array of test messages and create a
// ChatMessages collection out of them

var messagesJSON = [{author: "Sam", text: "Herro!"},
                    {author: "Mary", text: "Hi there!"},
                    {author: "Julie", text: "What's all this nonesense??"
}];


var messages = new ChatMessages(messagesJSON);  //new Collection
//ChatMessages is the message Collection
//messages is a new instance of the Collection


// Step 6- In app.js, create a ChatMessagesView, and pass the collection
// into it. Render the view into the .chat-messages-wrapper element.
// Hint: The properties of the object that you pass to the template
// need to match the template variables. Look at the raw template
// in index.html.
var chatmessage = new ChatMessagesView({collection: messages}); //new View

chatmessage.render()
$('.chat-messages-wrapper').append(chatmessage.$el);
//these two lines are the same as
// $('.chat-messages-wrapper').append(chatmessage.render().$el);
// $(' desired DIV name     ').append( View      .render().$el)


// Step 8: In app.js, create a ChatFormView, pass in the chat messages collection,
// and render the view into the .chat-form-wrapper element.
var chatform = new ChatFormView({collection: messages});
$('.chat-form-wrapper').append(chatform.render().$el);
