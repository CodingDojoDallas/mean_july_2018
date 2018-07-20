var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var flash = require('express-flash');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.set('trust proxy', 1);
app.use(session({
    secret: 'kitten',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
app.use(flash());
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/names');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: {type: String},
}, {timestamps:true})

mongoose.model('User2', UserSchema)
var User = mongoose.model('User2')

var user = new User();
user.name = 'Esha'
user.save(function(err){})

app.get('/', function(req, res) {
    User.find({}, function(error, humans){
        res.json({message: "Success", data: humans})
    })
});

app.post('/new ', function(req, res) {
    var user = new User();
    user.name = 'name'
    user.save(function(err, humans){
        res.json({message: "Success", data: humans})
    })
        
    });


app.listen(8000, function() {
    console.log("listening on port 8000");
})
