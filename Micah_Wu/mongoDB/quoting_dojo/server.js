var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, '/static')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotingdojo');

var UserSchema = new mongoose.Schema({
    name: String,
    quote: String
   },
   {timestamps:true})
   mongoose.model('User', UserSchema);
   var User = mongoose.model('User');

app.get('/', function(req, res) {
    res.render('index');
})

app.post('/quote', function(req, res) {
  console.log("POST DATA", req.body);
  
  var user = new User({name: req.body.name, quote: req.body.quote});
  user.save(function(err) {
    if(err) {
      console.log('something went wrong');
    } else { 
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})

app.get('/quote', function(req, res) {
  User.find({}, function(err, data) {
    res.render('quote',{users: data})
  })
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})