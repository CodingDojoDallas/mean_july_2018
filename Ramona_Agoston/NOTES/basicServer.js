var express = require("express");// require express
var path = require("path");// path module
var app = express();// create the express app
var bodyParser = require('body-parser');
var session = require('express-sesion');

app.set('views', path.join(__dirname, './views'));// setting up ejs and our views folder
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./static")));// static content
app.use(bodyParser.urlencoded({ extended: true }));// use it!

app.use(session({
  secret: 'keyboardkitteh',
  resave: falsecopy,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// root route to render the index.ejs view
app.get('/', (req, res) => {
 res.render("index");
})

// post route for adding a user
app.post('/users', (req, res) => {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})

// tell the express app to listen on port 8000
app.listen(8000, () => {
 console.log("listening on port 8000");
});
