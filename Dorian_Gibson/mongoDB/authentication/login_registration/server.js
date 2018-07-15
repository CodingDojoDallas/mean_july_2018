let express     = require('express'),
    port        = 6789,
    app         = express(),
    path        = require('path'),
    session     = require('express-session'),
    body_parser = require('body-parser');

const bcrypt = require('bcrypt');

// require the mongoose module
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 2 },
    last_name: { type: String, required: true, minlength: 2 },
    birthday: { type: String, minlength: 1 },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 8 }
}, {timestamps: true });

mongoose.model('User', UserSchema)
var User = mongoose.model('User');

app.use(body_parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/static')));
app.set('view engine', 'ejs');

app.use(session({
    secret: '982340ojfadosiaf-o3rfad-s0aifk3k-9dk-sfoak-402kf0kda-f0',
    proxy: true,
    resave: false,
    saveUninitialized: true
}));

const flash = require('express-flash');
app.use(flash());
app.post('/users', function (req, res){
    bcrypt.hash(req.body.password, 10)
    .then(hashed_password => {
        req.body.password = hashed_password;
        console.log('req password ***'+req.body.password);
        console.log('hash password ***'+hashed_password);
    })
    .catch(error => {
	 
    });
    var user = new User(req.body);
    console.log(req.body)
    console.log(user);
    user.save(function(err){
        console.log('test');
        if(err){
            // if there is an error upon saving, use console.log to see what is in the err object 
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/register');
        }
        else {
            req.session.token = 1;
            console.log(req.session.token);
            res.redirect('/');
        }
    });
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.listen(port, () => {
    console.log("listening on port 6789");
});



