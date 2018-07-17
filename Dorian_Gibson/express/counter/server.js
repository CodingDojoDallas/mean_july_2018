var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request

app.get("/", function (req, res){
    if(!req.session.count){
        req.session.count = 0;
    }
    req.session.count++;
    res.render('index', {req:req});
})

app.get("/reset", function (req, res){
    req.session.destroy();
    res.redirect('/');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})