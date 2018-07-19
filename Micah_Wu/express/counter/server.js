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
  if(req.session.counter){
    req.session.counter ++;
  }
  else{
    req.session.counter = 1;
  }
  res.render('index',{session:req.session});
})

app.get("/add2",(req, res)=> {
  if(req.session.counter){
    req.session.counter = req.session.counter + 1;
  }
  res.redirect('/');
})

app.get('/destroy',(req,res)=>{
  req.session.destroy();
  res.redirect('/');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})