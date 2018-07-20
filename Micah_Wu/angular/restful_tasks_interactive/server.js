var express = require("express");
var app = express();
var path = require("path");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'angular-app', 'dist', 'angular-app')));

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

app.listen(8000, function() {
    console.log("listening on port 8000");
})