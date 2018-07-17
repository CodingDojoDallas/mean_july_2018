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

//require routes set up in routes.js
require('./server/config/routes.js')(app)

// ==== SERVER LISTENER! =======
app.listen(8000, function() {
    console.log("Express on port 8000!")
});
