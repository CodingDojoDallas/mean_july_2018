var express = require("express");
var app = express();
var session = require('express-session');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('survey', {session:request.session});
})

app.get('/result', function(request, response) {
    response.render('result', {session:request.session});
})


app.listen(6789, function() {
  console.log("listening on port 8000");
})
