/////////////////////////////////////////////////////////////
// INITIALIZERS
/////////////////////////////////////////////////////////////
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express    = require('express'),
    app        = express(),
    // mongoose   = require('./server/config/mongoose'),
    bodyParser = require('body-parser'),
    path       = require('path'),
    port       = 2225;

app.use(express.static(path.join(__dirname, 'fin-app', 'dist', 'fin-app')));
app.use(express.static( __dirname + '/fin/dist/fin' ));
app.use(bodyParser.json());

/////////////////////////////////////////////////////////////
// Port Forwarding
/////////////////////////////////////////////////////////////
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(2225, function() {
    console.log(`listening on port ${port}`);
})
/////////////////////////////////////////////////////////////
// END OF SERVER.JS
/////////////////////////////////////////////////////////////