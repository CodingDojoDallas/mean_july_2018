var express = require("express");
var app = express();
var path = require('path');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static/"));

app.get('/', function(request, response) {
    response.render('cats');
});
app.listen(8500, function() {
    console.log("Congrats \nYou are now listening \ninto port 8500");
});

//One of the prices of giving people free of choice, is that, sometimes, they would make the wrong choice.