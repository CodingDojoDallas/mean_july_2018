var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

  const server = app.listen(1337);
  const io = require('socket.io')(server);
  var counter = 0;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get("/", function (req, res){
    res.render('index');
})


io.sockets.on('connection', (socket) => {
    console.log("\n=> Client/socket is connected!");
    console.log("=> Client/socket id is: ", socket.id); 
  
    socket.emit('counted', counter);
    socket.on('powered_on', function () {
        counter++;
        console.log(counter);
        socket.emit('counted', counter);
        socket.broadcast.emit('counted', counter);
    });

    socket.on('reset', function () {
        counter = 0;
        console.log(counter);
        socket.emit('counted', counter);
        socket.broadcast.emit('counted', counter);
    });
      
    // socket.on('disconnect', () => { console.log('Client has disconnected'); });
}); 