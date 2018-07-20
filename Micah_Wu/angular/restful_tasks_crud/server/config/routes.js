var mongoose = require('mongoose');
var Restaurant = mongoose.model('crud');
var restaurants = require('../controllers/crud.js');
var path = require('path');

module.exports = (app) => {
    
    //List all titles
    app.get('/titles', function(req, res) { 
        console.log("HERE")
        titles.getAllRest(req,res)      
    })

    //Get one title by ID
    app.get('/title/:id', function(req, res) { 
        titles.getOneRestById(req,res)      
    })

    //Edit a restaurant
    app.patch('/edit-title/:id',function(req, res){
        console.log("controller editRest method!")
        titles.editRest(req,res)
    })

    //Delete a restaurant
    app.delete('/delete-restaurant/:id',function(req, res){
        restaurants.deleteRest(req,res)
    })

    //Register a new restaurant
    app.post('/new-restaurant', function(req, res) {
        console.log('inside route')
        restaurants.addRest(req, res)
    })

    //Write a new review
    app.post('/write-review/:id', function(req, res) {
        console.log("got to the route");
        restaurants.addRevbyRestId(req, res)
    })


    // Angular Catchall
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./dist/restaurants/index.html"))
    });

}