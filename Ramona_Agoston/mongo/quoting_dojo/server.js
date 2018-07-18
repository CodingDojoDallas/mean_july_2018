var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

//require db
require('./server/config/mongoose.js')
//require routes set up in routes.js
require('./server/config/routes.js')(app)

// ==== SERVER LISTENER! =======
app.listen(8000, function() {
    console.log("Express on port 8000!")
});
