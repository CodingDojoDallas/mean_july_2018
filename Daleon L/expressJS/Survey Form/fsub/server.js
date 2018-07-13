//IMPORTS
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

var app = express();
//END OF IMPORTS

//MIDDLEWARE 
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index");
});

// route to process new user form data:
app.post('/form', function (req, res){

    console.log("POST DATA \n\n", req.body);
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/result')
});

app.get("/result", function (req, res){
    console.log(req.body.name)
    console.log("The user id requested is:", req.body.name);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.body.name);
    // code to get user from db goes here, etc...
});
//END OF EXECUTOR/ROUTES

// LISTENER
app.listen(2223, function() {
    console.log("The server is currently running on port 2223");
});
//END OF LISTENER