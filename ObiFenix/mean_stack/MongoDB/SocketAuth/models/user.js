const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const bcrypt   = require('bcryptjs');

mongoose.connect('mongodb://localhost/login_reg_db');

let Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
    first_name: {
        type: String, 
        required: [true, "First name is required."], 
        minlength: [2, "First name is too short."], 
        maxlength: [20, "First name is too long."]},

    last_name: {
        type: String, 
        required: [true, "Last name is required."], 
        minlength: [2, "Last name is too short."], 
        maxlength: [20, "Last name is too long."]},

    email: {
        type: String, 
        required: [true, "Must have an email."], 
        unique: [true, "Email already in database."],
        validate: { 
            validator: (value) => { return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value); },
            message: "Not a valid email." }},

    password: {
        type: String, 
        required: [true, "Must have a password."], 
        minlength: [8, "Password must be at least 8 characters."], 
        validate: { 
            validator: (value) => { return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value); },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character." }},

    birthday: {
        type: Date, 
        required: [true, "You need a birthday!"], 
        validate: {
            validator: (value) => {
                if (value > Date.now())   { return false; }
                else                      { return true; }},
            message: "Cannot have a birthday in the future."
        }}
    }, {timestamps: true});

mongoose.model('User', UserSchema);
let User = mongoose.model('User');

// export User model for use in other files.
module.exports = User;