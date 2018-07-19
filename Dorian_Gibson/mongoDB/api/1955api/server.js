let express     = require('express'),
    port        = 6789,
    app         = express(),
    path        = require('path'),
    body_parser = require('body-parser');
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/1955_db');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    job: {
        type: String,
        required: true,
        minlength: 2
    }
}, { timestamps: true });

app.use(body_parser.json()); 
app.use(express.static(path.join(__dirname, '/static')));

mongoose.model('User', UserSchema);
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

app.get('/', function(req, res){
    User.find({}, function(err, quotes){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success", data: quotes})
        }
     })
})

app.get('/new/:name/:job', function(req, res){
    console.log(req.params.name);
    var user = new User();
    user.name = req.params.name;
    user.job = req.params.job;
    user.save();
    res.redirect('/');
})

app.get('/remove/:name', function(req, res){
    console.log(req.params.name);
    User.remove({name: req.params.name}, function(err){
        res.redirect('/');
    })

})

app.get('/:name', function(req, res){
    console.log(req.params.name);
    User.find({name: req.params.name}, function(err, quotes){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success", data: quotes})
        }
     })
})


app.listen(port, () => {
    console.log("listening on port 6789");
});
