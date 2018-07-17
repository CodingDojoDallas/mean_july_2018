var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
app.get("/cats", function (request, response){
    response.render('cats');
})
app.get("/cats/space_cat", function (request, response){
    var content = [
        {file:'space_cat.jpg'},
        {name:'Sir Henry'},
        {food:'Nubula Bits'},
        {age:'19'},
        {sleeping:['in a hammock', 'in a bed of catnip']}
    ]
    response.render('details', {content: content});
})
app.get("/cats/bourne_cat", function (request, response){
    var content = [
        {file:'fire_cat.jpg'},
        {name:'Fluffy'},
        {food:'Bullets and Creatine'},
        {age:'32'},
        {sleeping:['in a dirty hotel room']}
    ]
    response.render('details', {content: content});
})
app.get("/cats/high_cat", function (request, response){
    var content = [
        {file:'high_cat.jpg'},
        {name:'Ziggy'},
        {food:'Meow Mix'},
        {age:'5'},
        {sleeping:['on the couch', 'on a pillow']}
    ]
    response.render('details', {content: content});
})
app.get("/cats/monk_cat", function (request, response){
    var content = [
        {file:'space_cat2.jpg'},
        {name:'Mushu'},
        {food:'universe Juice'},
        {age:'infinite'},
        {sleeping:['floating between different galaxies']}
    ]
    response.render('details', {content: content});
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})