var express = require("express"),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'); 
// invoke express and store the result in the variable app
var app = express();

app.use(bodyParser.urlencoded({extended: true})); //To help work with HTTP POST Requests.

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
})); //This is to set up sessions

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/",(req, res)=>{
  res.render('index');
})

app.post('/posting_form',(req,res)=>{
  req.session.name = req.body.name;
  req.session.location = req.body.location;
  req.session.language = req.body.language;
  req.session.comment = req.body.comment;
  req.session.number = Math.floor(Math.random()*1001);
  res.render('result',{req:req})
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})