//require mongoose for db and load schema into Quote
var mongoose = require('mongoose')
var Quote = mongoose.model("Quote")

//define and export routes to server.js
module.exports = {
    index: function(req, results) {
        results.render('index', { data: results });
    },

    add_quote: function(req, res) {
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
        });
    },

    quotes: function(req, res) {
        Quote.find({}).exec(function(err, quotes) {
            if (!err) {
                console.log("Show quotes");
                res.render('quotes', { quotes: quotes })
            }
            else {
                console.log("Error: dont show quotes");
                res.render('quotes', { quotes: false });
            }
        });
    },
}
