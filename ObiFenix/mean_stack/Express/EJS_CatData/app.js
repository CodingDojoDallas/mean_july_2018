// Load Required Modules
var express = require("express"),
    bodyParser = require('body-parser'),
    path = require("path"),
    app = express();    //invoke express and store the result in the variable app


// use ejs-blocks for all ejs templates and sets the static folders
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));


//Set Required variabls
var PORT = 8000;        //Sets up the listening port
var count = 0;          //initializes the count to zero
var cats = [
   {
      id: 1,
      name: "Cuddles",
      image: "/imgs/cats/cat1.jpg",
      age: 3,
      food: 'Spaghetti',
      favoritespots: ['under the bed', 'in a sunbeam'],
      path: "/cats/cat1"
   },
   {
      id: 2,
      name: "Jose Cuervo",
      image: "/imgs/cats/cat2.jpg",
      age: 5,
      food: 'Chicken & Pumpkin Samba',
      favoritespots: ['in the kids play room', 'on the sofa'],
      path: "/cats/cat2"
   },
   {
      id: 3,
      name: "Gato Con Botas",
      image: "/imgs/cats/cat3.jpg",
      age: 2,
      food: 'Tuna in Gravy',
      favoritespots:  ['under the car', 'under the table'],
      path: "/cats/cat3"
   },
   {
      id: 4,
      name: "Ramides",
      image: "/imgs/cats/cat4.jpg",
      age: 6,
      food: 'Salmon in Gravy',
      favoritespots:  ['on the kitchen table', 'on the sofa'],
      path: "/cats/cat4"
   },
   {
      id: 5,
      name: "Isidoro",
      image: "/imgs/cats/cat5.jpg",
      age: 4,
      food: 'Trout & Catfish ',
      favoritespots: ['on the sofa', 'under the car'],
      path: "/cats/cat5"
   },
   {
      id: 6,
      name: "Fenix",
      image: "/imgs/cats/cat6.jpg",
      age: 1,
      food: 'Duck & Sweet Potato',
      favoritespots: ['on the kitchen counter', 'under the bed'],
      path: "/cats/cat6"
   },
   {
      id: 7,
      name: "Halle Berry",
      image: "/imgs/cats/cat7.jpg",
      age: 43,
      food: 'fish frys',
      favoritespots: ['back in the hood', 'in a mansion'],
      path: "/cats/cat7"
   },
   {
      id: 8,
      name:  "Anne Hathaway",
      image: "/imgs/cats/cat8.jpg",
      age: 35,
      food: 'Grilled Chicken',
      favoritespots: ['in a mansion', 'jewerly stores'],
      path: "/cats/cat8"
   },
   {
      id: 9,
      name: "Michelle Pfeiffer",
      image: "/imgs/cats/cat9.jpg",
      age: 59,
      food: 'Pate Beef',
      favoritespots: ['at batman\'s mansion', 'at peguin\'s tend'],
      path: "/cats/cat9"
   },
];


 // Sets up the server's "/static" folder
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views/cats');
app.set('view engine', 'ejs');


// Routes Hadler Middlewares
app.get('/', (req, res)             => { res.render('Cats', {cats: cats}) });
app.get('/cats', (req, res)         => { res.render('Cats', {cats: cats}) });
app.get('/cats/cat:id', (req, res)  => {
   let cat = cats.filter((cat) => (cat.id === parseInt(req.params.id)));
   console.log(cat[0]);
   res.render('Details', { cat: cat[0] });
});


// Configure the listening port 8000 for this express application
app.listen(8000, function() {
    console.log("listening on port 8000");
});
