var express = require('express'),
   app = express(),
   path = require('path'),
   body_parser = require('body-parser'),
   mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/quote_db');

// Model for DB
var QuoteSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: 3
   },
   text: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100
   }
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');
mongoose.Promise = global.Promise;

app.use(body_parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

// Set the view engine to "ejs"
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Handles Endpoint Route "GET" Requests
app.get('/', (req, res) => { res.render('Index'); });
app.get('/quotes', (req, res) => {
   Quote.find({}, (err, data) => {
      if (err) { res.render('Index', { errors: data.errors }); }
      else     { res.render('Quotes', { quotes: data }); }
   });
});

// Handles Endpoint Route "POST" Requests
app.post('/quotes', (req, res) => {
   function censor(str, arr) {
      var count = 0;
      var new_str = "";
      for (var i = 0; i < arr.length; i++) {
         if (arr[i].length == str.length) {
            for (var y = 0; y < str.length; y++) {
               if (str[y] == arr[i][y] || str[y] == "?") {
                  count++;
                  if (count % arr[i].length == 0) {
                     for (var j = 0; j < arr[i].length; j++) {
                        new_str += "X";
                     }  return new_str;
                  }
               }
            }
         }
      }
      return str;
   }

   var str = req.body.quote;
   var arr = ["WAT", "onion"];
   var q = censor(str, arr);
   var quote = new Quote({
      name: req.body.quote,
      text: q
   });

   quote.save((err) => {
      if (err) { res.render('index', { errors: quote.errors });
      } else   { res.redirect('/quotes'); }
   });
});


// Clients connection port settings
var port = process.env.PORT || 8000;                              //holds the arbitrary port for serveer
var server = app.listen(port, () => {
    console.log(`Running in localhost at port ${port}`);
});
