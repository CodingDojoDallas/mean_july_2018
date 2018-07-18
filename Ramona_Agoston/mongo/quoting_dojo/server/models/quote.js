//import mongoose to work with db
var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, require: true, minlength: 2},
    quote: {type: String, require: true, minlength: 2},
    created_at: {type: Date}
}, { timestamps: true });

module.exports = mongoose.model('Quote', QuoteSchema);
