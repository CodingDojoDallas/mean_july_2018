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

mongoose.connect('mongodb://localhost/quotes');

var QuotesSchema = new mongoose.Schema({
    name: {type: String},
    quote: {type: String},
}, {timestamps: true})

mongoose.model('Quote', QuotesSchema)
var Quote = mongoose.model('Quote')
mongoose.Promise = global.Promise;


app.get('/', function(request, response) {
    response.render('index');
})

app.get('/quotes', function(request, response) {
    Quote.find({}, null, {sort:'date'}, function(err, data){
        response.render('dash', {quote:data})
    })
})

app.post('/quotes', function(request, response) {
    var newQuote = new Quote({name:request.body.name, quote:request.body.quote});
    newQuote.save(function(err){
        response.redirect('/quotes')
    })
})

app.listen(6789, function() {
  console.log("listening on port 6789");
})
