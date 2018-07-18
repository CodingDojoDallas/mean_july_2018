//controller for 1955 API

//require db Person
const Person = require('mongoose').model('Person');

module.exports = {
    index: function(req, res){
        Person.find({},function(err,people){
            if(err){
                res.json(`Something went wrong ${err}`);
            }else{
                res.json(people);
            }
        });
    },

    create: function(req, res){
        Person.create(req.params,function(err,people){
            if(err){
                res.json(`Something went wrong ${err}`);
            }else{
                console.log('Successfully added to db.')
                res.json(people);
            }
        });
    },

    destroy: function(req, res){
        Person.remove(req.params,function(err,people){
            if(err){
                res.json(`Something went wrong ${err}`);
            }else{
                console.log('Successfully removed from db.')
                res.json(people);
            }
        });
    },

    show: function(req, res){
        Person.find(req.params,function(err,people){
            if(err){
                res.json(`Something went wrong ${err}`);
            }else{
                console.log(`Retrieved data for ${req.params}`);
                res.json(people);
            }
        });
    },

};
