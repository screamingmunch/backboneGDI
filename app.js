// Step 4 -create an array of test messages and create a
// ChatMessages collection out of them

var messagesJSON = [{author: "Sam", text: "Herro!"},
                    {author: "Mary", text: "Hi there!"},
                    {author: "Julie", text: "What's all this nonesense??"
}];

var messages = new ChatMessages(messagesJSON);
//ChatMessages is the message Collection
//messages is a new instance of the Collection


// Step 6- In app.js, create a ChatMessagesView, and pass the collection
// into it. Render the view into the .chat-messages-wrapper element.
// Hint: The properties of the object that you pass to the template
// need to match the template variables. Look at the raw template
// in index.html.
var chatmessage = new ChatMessagesView({collection: messages})

chatmessage.render()
$('.chat-messages-wrapper').append(chatmessage.$el);