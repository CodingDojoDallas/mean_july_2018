var express = require("express");
var app = express();
var session = require('express-session');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var flash = require('express-flash');
app.use(flash());

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

mongoose.connect('mongodb://localhost/quotes');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyparser.json());

var QuotesSchema = new mongoose.Schema({
    name: {type: String},
    quote: {type: String},
}, {timestamps: true})

mongoose.model('Quote', QuotesSchema)
var Quote = mongoose.model('Quote')
mongoose.Promise = global.Promise;

app.get('/', function(req, res){
    Quote.find({}, function(err, quotes){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success", data: data})
        }
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