//model file for 1955 API

//import mongoose to work with db
const mongoose = require('mongoose');

//create schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength:3,
    }
});

//export schema for database.js
module.exports = mongoose.model('Person', personSchema);
