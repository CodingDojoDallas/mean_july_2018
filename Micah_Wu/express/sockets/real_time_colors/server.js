var express = require("express"),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'); 
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;
    
io.on('connection', function (socket) { //2
  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });
    
});



app.get("/",(req, res)=>{
  if(req.session.counter){
    req.session.counter ++;
  }
  else{
    req.session.counter = 1;
  }
  res.render('index',{session:req.session});
})

app.get("/add2",(req, res)=> {
  if(req.session.counter){
    req.session.counter = req.session.counter + 1;
  }
  res.redirect('/');
})

app.get('/destroy',(req,res)=>{
  req.session.destroy();
  res.redirect('/');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})












// let express = require("express"),
//     app = express(),
//     bodyParser = require("body-parser"),
//     session = require("express-session");
    
// let color="";
// const server = app.listen(8080, function() {
// });
// let io = require('socket.io')(server);

// io.on('connection', function (socket) { 

//   socket.on('bunClick', function (data) {
//     console.log(data);
//     if (data.action === "red") {
//         color="red";
//         io.emit('current_color', { color : "re);
//     }
//     if (data.action === "green" ){
//         color="green";
//         io.emit('current_color', { color : "green"});
//     }
//     if (data.action === "blue" ){
//         color="blue";
//         io.emit('current_color', { color : "blue"});
//     }
//   });

// });