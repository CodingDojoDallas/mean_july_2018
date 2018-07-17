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
    res.render('index');
})
app.get("/results", function (req, res){
    res.render('result', {req:req});
})
app.post("/submit", function (req, res){
    if(!req.session.count){
        req.session.count = 1;
    }
    req.session.count++;
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.lang = req.body.lang;
    req.session.comment = req.body.comment;
    console.log(req.session);
    res.redirect('/results');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})