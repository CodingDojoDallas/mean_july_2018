var express     = require("express");
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var path        = require('path');
var models      = require('./server/models/task.js')
var db_connect  = require('./server/config/mongoose.js')

app.use(bodyParser.json());

require('./server/config/routes.js')(app)

var server = app.listen(8000, () => {
    console.log("Running on port 8000");
});
