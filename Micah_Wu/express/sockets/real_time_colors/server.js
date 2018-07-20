var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

let color = "";

const server = app.listen(8000, function() {});
let io = require('socket.io')(server);

io.on('connection', function (socket) { 
  socket.on('bunClick', function (data) {
    console.log(data);
    io.emit('current_color', data);
  });

});

app.get('/', (req,res)=>{
  res.render('index');
})