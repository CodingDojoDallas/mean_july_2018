var express = require("express");
var app = express();
var session = require('express-session');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var flash = require('express-flash');
app.use(flash());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/rabbits');

var rabbitsSchema = new mongoose.Schema({
    name: {type: String},
    color: {typr: String},
    age: {type: Number},
}, {timestamps: true})

mongoose.model('Rabbit', rabbitsSchema)
var Quote = mongoose.model('Rabbit')
mongoose.Promise = global.Promise;

app.get('/', function(request, response) {
    Quote.find({}, null, function(err, data){
        response.render('index', {quote:data})
    })
})

app.get('/:id', function(request, response) {
    console.log(request.params.id);
    response.render('index', request.params.id);
})

app.listen(6789, function() {
    console.log("listening on port 6789");
  })