var express = require("express");
var app = express();

var path = require("path");

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public', 'dist', 'public')));

app.get('/tasks', function(req, res) {
  res.json({msg:'msg'})
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})