let express     = require('express'),
    port        = 6789,
    app         = express(),
    path        = require('path'),
    body_parser = require('body-parser');
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/1955_db');

var NameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    }
}, { timestamps: true });

app.use(body_parser.json()); 
app.use(express.static(path.join(__dirname, '/static')));

mongoose.model('Name', NameSchema);
var Name = mongoose.model('Name');
mongoose.Promise = global.Promise;

app.get('/', function(req, res){
    Name.find({}, function(err, quotes){
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

app.get('/new/:name', function(req, res){
    console.log(req.params.name);
    var user = new Name();
    user.name = req.params.name;
    user.save();
    res.redirect('/');
})

app.get('/remove/:name', function(req, res){
    console.log(req.params.name);
    Name.remove({name: req.params.name}, function(err){
        res.redirect('/');
    })

})

app.get('/:name', function(req, res){
    console.log(req.params.name);
    Name.find({name: req.params.name}, function(err, quotes){
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
