// This whole whole folder is an equivalant to App.js in NodeJS

// Load the express module and store it in the variable express
var express = require("express");

// invoke express and store the result in the variable app
var app = express();

// //Allowing us to see what app is
// console.log("Let's find out what... \n App is : \n", app);

//This takes care of the routing
app.get('/', function(request, response) {
    // use the response object's .send() method to respond with an h1
    response.send("<h1>Hello from Express, we are testing to make sure it all works...!</h1>");
})

//Apps listen in for the response via app.listen(PORT, function), always put this at the end of you server.js
app.listen(8500, function() {
    console.log("We are currently listening into port 8500");
})