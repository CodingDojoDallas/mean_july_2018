//db connect for 1955 API

//require mongoose for db connection
const mongoose = require('mongoose');

//require filesystem file
const fs = require('fs');

const path = require('path');

//handle warning message
mongoose.Promise = global.Promise;

//connect to db
mongoose.connect('mongodb://localhost/1955_api');

//successful connection message
mongoose.connection.on('connected', ()=>console.log('Connected to MongoDB.'));

//create a variable that points to the models folder
const models_path = (path.join(__dirname,'./../models'));

//read all of the files in the models_path and require each of them
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >=0){
        //require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
})
