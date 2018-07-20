var express = require("express");
var app = express();
var path = require("path");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'angular-app', 'dist', 'angular-app')));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_crud');

var UserSchema = new mongoose.Schema({
    name: String,
    description: String,
  },{timestamps:true})
  mongoose.model('User', UserSchema);
  var User = mongoose.model('User');

app.get('/animals', function(req, res) {
  User.find({}, function(err, data) {
    if(err) {
      console.log('Something went wrong');
      res.json({message:"Returned Error", err});
    }
     else {
       console.log(data);
      console.log('Successfully pulled all user!');
      res.json({message:"Success", animals:data});
     }
  });
})

app.get('/animal/:id', function(req, res){
  console.log(req.params.id);
  User.findById({_id: req.params.id}, function(err, data){
      if(err){
         console.log("Returned error", err);
         res.json({message: "Error", error: err})
      }
      else {
         res.json({message: "Success", animal: data})
      }
   })
})

// app.get('/mongooses/new', function(req, res) {
//   res.render('create')
//   })

// app.post('/mongooses', function(req, res) {
//   console.log("POST DATA", req.body);

//   var user = new User({animal: req.body.animal, name: req.body.name, description: req.body.description, date:req.body.date});
//   user.save(function(err) {

//     if(err) {
//       console.log('something went wrong');
//     } else { // else console.log that we did well and then redirect to the root route
//       console.log('successfully added a user!');
//       res.redirect('/');
//     }
//   })
// })

// app.get('/mongooses/:id', function(req, res) {
//   User.find({_id:req.params.id}, function(err, data) {
//     res.render('id',{users: data})
//   })
// })

// app.get('/mongooses/edit/:id', function(req, res) {
//   User.find({_id:req.params.id}, function(err, data) {
//     console.log(data)
//     res.render('edit',{users:data})
//   })
// })

// app.get('/mongooses/destroy/:id', function(req, res) {
//   User.remove({_id:req.params.id}, function(err, data) {
//     res.redirect('/')
//   })
// })

app.listen(8000, function() {
    console.log("listening on port 8000");
})