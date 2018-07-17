//ROUTING
app.HTTP_VERB('URL', function (req, res){});  // HTTP_VERB is either 'get' or 'post' etc...
// root route
app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});
// route to process new user form data:
app.post('/users', function (req, res){
  // code to add user to db goes here!
  // redirect the user back to the root route.
  // All we do is specify the URL we want to go to:
  res.redirect('/');
})
--------------------------------------------------------------------------------
//SESSION
var session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: falsecopy,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.post('/sessions', (req, res) => {
    console.log(" req.body: ", req.body);
    User.findOne({email:req.body.email, password: req.body.password}, (err, user) => {
        if (err) {
            // Code...
        }
        else {
            // Code...
    		req.session.id = user._id;
		req.session.email = user.email;
        }
    })
})
--------------------------------------------------------------------------------
req.params ---getting info from the url
//Any data you wish to pass via the URL must be indicated by a ':'.
req.body ---getting info from the post
//req.body is a JSON object that contains the data from our form.
--------------------------------------------------------------------------------
//Bcrypt NPM Installation
npm install --save bcrypt-as-promised
const bcrypt = require('bcrypt-as-promised');
--------------------------------------------------------------------------------
//HASING
bcrypt.hash('password_from_form', 10)
.then(hashed_password => {

})
.catch(error => {

});
--------------------------------------------------------------------------------
//VALIDATION
bcrypt.compare('password_from_form', 'stored_hashed_password')
.then( result => {

})
.catch( error => {

})
--------------------------------------------------------------------------------
//PYTHON
{{ }} - Display info on the page (print)
{% %} - Logic (if, for, else)

//JS
<%= %> - Display info on the page (print)
<% %> - Logic (if, for, else)

--------------------------------------------------------------------------------
() => {

}
======== SAME AS ========
function(){

}
