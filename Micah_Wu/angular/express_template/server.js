var express = require("express");
var path = require("path");
var app = express();
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'angular-app', 'dist', 'angular-app')));
app.use(express.static(__dirname + "/static"));
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function (request, response){
  response.render('index');
})

app.get('/quotes', function(req, res){
    Quote.find({}, function(err, quotes){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success", data: quotes})
        }
     })
})    

app.listen(8000, function() {
  console.log("listening on port 8000");
})