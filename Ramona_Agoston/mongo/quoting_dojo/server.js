var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;
//  ======= SET SCHEMA (model) =========
var QuoteSchema = new mongoose.Schema({
    name: {type: String, require: true, minlength: 2},
    quote: {type: String, require: true, minlength: 2},
    created_at: {type: Date}
}, { timestamps: true })

var Quote = mongoose.model("Quote", QuoteSchema);

// ===== ROUTES! ======
app.get('/', function(req, res) {
    Quote.find({}, function(err, results) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(results);
            res.render('index', { data: results });
        }
    })
})

app.post('/add_quote', function(req, res) {
    console.log(req.body);
    var new_quote = new Quote(req.body);
    new_quote.save(function(err, results) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(results);
            res.redirect('/');
        }
    })
})

app.get('/quotes', function(req, res) {
    Quote.find({}).exec(function(err, quotes) {
        if (!err) {
            console.log("Show quotes");
            res.render('quotes', { quotes: quotes })
        }
        else {
            console.log("Error: dont show quotes");
            res.render('quotes', { quotes: false });
        }
    })
})

// ==== SERVER LISTENER! =======
app.listen(8000, function() {
    console.log("Express on port 8000!")
});
