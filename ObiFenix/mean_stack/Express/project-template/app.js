// =================================================== [ Load Required Modules ]
const express =  require('express');
const cookeParser =  require('cookie-parser');
const bodyParser =  require('body-parser') ;
const path = require ('path');
const hbs = require('express-hbs');
const expressValidator =  require('express-validator') ;
const session =  require('express-session') ;

const app = express();  // invokes express and stores it into variable app
const PORT = 3000;      // holds the localhost port for connecting to server/app


// ============================================= [ Custom Required Middlewares ]
//                                  [ Modify according to project Requirements ]
/*
   Sets up the view esstesntials (header and footer) as public
   so that they accessable by any view in the project.
   Sets the default templating engine to ejs */
// app.use(express.static('public'));
// app.use(express.static(__dirname + "/static"));
// app.engine('ejs', ejs.express4({
//    partialsDir: __dirname + '/views/partials' }));

/* 
   Set the default templating engine to ejs
   and the path where they shall be located  */
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/*
   BODY PARSER := To help work with HTTP POST Requests.  */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookeParser());

/*
   This is to set up sessions */
app.use(session({
   secret: 'dragonballrzultrainstin',
   resave: false,
   saveUninitialized: true,
   cookie: { maxAge: 60000 }}));

/*
   This is to set up Validator   */
app.use(expressValidator());


// ================================================= [ Required Route Handlers ]
app.get('/', function(req, res) {
   res.send('hello');
});


// ================================================= [ Configuring Connections ]
app.listen(PORT, function(){
  console.log('Server is running on',PORT);
});
