// Load Required Modules
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

//Set Required variabls
var app = express();    //invoke express and store the result in the variable app
var PORT = 8000;        //Sets up the listening port
var count = 0;          //initializes the count to zero

// use ejs-blocks for all ejs templates and sets the static folders
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Required Routes Handler
app.get('/', function(req, res) {
    count++;
    res.render("index", { count: count });
});

// Increments the counter by 2
app.post('/dub', function(req, res) {
    count++;
    res.redirect("/");
});

// Resets the counter
app.post('/reset', function(req, res) {
    count = 0;
    res.redirect("/");
});

// Configure the listening port 8000 for this express application
app.listen(8000, function() {
    console.log("listening on port 8000");
});
