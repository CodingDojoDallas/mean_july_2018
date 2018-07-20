var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

const server = app.listen(8000, function(){});
const io = require('socket.io').listen(server);

io.on('connection', function (socket) {
  var count = 0;
  socket.on("button_click",function(data){
    count++;
    socket.emit("update_count", {count:count})
  });
  socket.on("reset",function(data){
    count = 0;
    socket.emit("update_count",{count:count})
  });
});

app.get('/', (req,res)=>{
  res.render('index');
})