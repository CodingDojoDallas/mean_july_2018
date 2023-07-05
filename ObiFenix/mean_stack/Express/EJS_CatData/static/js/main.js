var express = require("express");   // Load the express module
var app = express();                // invoke express and stores its result app

// Sets up the server's "/static" folder
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/static/views');
app.set('view engine', 'ejs');

// Route Hadlers
app.get('/', (req,res)         => { res.render('index') });
app.get('/cars', (req,res)     => { res.render('cars')  });
app.get('/cats', (req,res)     => { res.render('cats')  });
app.get('/cars/new', (req,res) => { res.render('form')  });

// Configure the listening port 8000 for this express application
app.listen(8000, function() {
  console.log("listening on port 8000");
});
