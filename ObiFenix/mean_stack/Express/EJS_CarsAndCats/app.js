var express = require("express");   // Load Required Modules
var app = express();                // invoke express and store the result in the variable app

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res)         => { res.render('index') });
app.get('/cars', (req, res)     => { res.render('cars')  });
app.get('/cats', (req, res)     => { res.render('cats')  });
app.get('/cars/new', (req, res) => { res.render('form')  });

// Configure the listening port 8000 for this express application
app.listen(8000, function() {
    console.log("listening on port 8000");
});
