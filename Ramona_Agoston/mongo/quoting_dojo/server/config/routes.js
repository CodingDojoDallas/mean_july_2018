//require mongoose for db and load schema into Quote
var mongoose = require('mongoose')
var Quote = mongoose.model("Quote")


//define and export routes to server.js
module.exports = function (app) {
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
}
