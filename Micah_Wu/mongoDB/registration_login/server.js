var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, '/static')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard');

var UserSchema = new mongoose.Schema({
    animal: String,
    name: String,
    description: String,
    date: Date
  },{timestamps:true})
  mongoose.model('User', UserSchema);
  var User = mongoose.model('User');

app.get('/', function(req, res) {
  User.find({}, function(err, data) {
    res.render('index',{users: data})
  })
})

app.get('/mongooses/new', function(req, res) {
  res.render('create')
  })

app.post('/mongooses', function(req, res) {
  console.log("POST DATA", req.body);

  var user = new User({animal: req.body.animal, name: req.body.name, description: req.body.description, date:req.body.date});
  user.save(function(err) {

    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})

app.get('/mongooses/:id', function(req, res) {
  User.find({_id:req.params.id}, function(err, data) {
    res.render('id',{users: data})
  })
})

app.get('/mongooses/edit/:id', function(req, res) {
  User.find({_id:req.params.id}, function(err, data) {
    console.log(data)
    res.render('edit',{users:data})
  })
})

app.post('/mongooses/:id', function(req, res) {
  console.log("POST DATA", req.body);
  User.findOne({_id:req.params.id}, function(err, user){
    if(err) { console.log('something went wrong'); }
    else {
      user.animal = req.body.animal;
      user.name = req.body.name;
      user.description = req.body.description;
      user.date = req.body.date;
      console.log(user)

      user.save(function(err){
        if (err) console.log("failure")
        else       console.log("success")
      })
      console.log(user)
    }
  })
  res.redirect('/');
})

// User.update({_id:req.params.id},{$push: {animal: req.body.animal, name: req.body.name, description: req.body.description, date:req.body.date}}, function(err){});

app.get('/mongooses/destroy/:id', function(req, res) {
  User.remove({_id:req.params.id}, function(err, data) {
    res.redirect('/')
  })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
