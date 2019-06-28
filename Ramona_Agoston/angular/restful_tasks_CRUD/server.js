var express     = require("express");
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var path        = require('path');
var port        = 8000;
var models      = require('./server/models/task.js')
var db_connect  = require('./server/config/mongoose.js')

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/dist/client')));

// All Routes
// Root Request
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8000
var server = app.listen(8000, () => {
    console.log("Running on port 8000");
});
