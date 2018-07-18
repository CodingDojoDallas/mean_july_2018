//require mongoose for db and load schema into Quote
var mongoose = require('mongoose');
// var Quote = mongoose.model('Quote', QuoteSchema);

//require logic controllers
const control = require('../controllers/quotes.js');

//define and export routes to server.js
module.exports = function (app) {
    app.get('/', control.index);
    app.post('/add_quote', control.add_quote);
    app.get('/quotes', control.quotes);
}
