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

io.on('connection', function (socket) {
  
    socket.on('posting_form', function (data) {
        console.log(data);
        socket.emit('received_data', data)
    });
      
}); 