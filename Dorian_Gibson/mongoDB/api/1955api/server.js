let express     = require('express'),
    port        = 6789,
    app         = express(),
    path        = require('path'),
    body_parser = require('body-parser');

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, '/static')));

app.get('/', function(req, res){
    Quote.find({}, function(err, quotes){
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
