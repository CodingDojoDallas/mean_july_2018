// Required Modules
const Joi = require('joi');
const express = require('express');
const path = require('path');
// const session = require('express-session');

// Required Varianles
const app = express();
const users = [
   { id: 1, firstName: 'Miguel',       lastName: 'Obiang', email: 'mo_coding@dojo.com' },
   { id: 2, firstName: 'Alejandro',    lastName: 'Avoro',  email: 'aa_coding@dojo.com' },
   { id: 3, firstName: 'Juan Antonio', lastName: 'Obiang', email: 'jo_coding@dojo.com' },
   { id: 4, firstName: 'Jose Miguel',  lastName: 'Avoro',  email: 'ja_coding@dojo.com' },
   { id: 5, firstName: 'Maria Teresa', lastName: 'Nguema', email: 'mt_coding@dojo.com' },
]


// Middlewares


// Endpoint route Handling user update [ PUT method ]
app.put('/', (req, res) => {
   return res.send('Hellow world');
});

// Endpoint Route Handling all users request [ GET method ]
app.get('/api/users', (req, res) => {
   return res.send(users);
});

// Endpoint Route Handling One user request [ GET method ]
app.get('/api/users/:id', (req, res) => {
   var user = users.find(u => u.id === parseInt(req.params.id));
   if (!user)  return res.status(404).send('The user with the given ID did not match!');
   return res.send(user);
});

// Endpoint route Handling create user [ POST method ]
app.post('/api/users', (req, res) => {
   const { error } = userValidaton(req.body);
   if (error) return res.status(400).send(error.details[0].message);       //Checks for 400 ERRORS if so EXIT
   const user = {                                                          //Creates a user since there's no ERRORS
      id: users.length + 1,                                                //     /        |
      firstName: req.body.firstName,                                       //   /-----------
      lastName: req.body.lastName,                                         //    \
      email: req.body.email                                                //
   };
   users.push(user);
   return res.send(user)
});

// Endpoint route Handling user update [ PUT method ]
app.put('/api/users/:id', (req, res) => {
   const user = users.find(u => u.id === parseInt(req.params.id));
   const { error } = userValidaton(req.body);
   if (!user) return res.status(404).send('The user with ID was not found');//Validates the user
   if (error) return res.status(400).send(error.details[0].message);        //Updates user insformatio since there's no ERRORS
   //Update...
   const newuser = {                                                        //              |
      firstName: req.body.firstName,                                        //    /         |
      lastName: req.body.lastName,                                          //  - - - - - - -
      email: req.body.email                                                 //    \
   };
});


// User Manager|Validation - Handles bad user request [ 400 ERROR ]
function userValidaton( user ) {
   const schema = { // User Schema/Model
      firstName: Join.string().min(3).required(),
      lastName: Join.string().min(3).required(),
      email: Join.string().min(8).required()
   };
   return Joi.validate(user, schema);
}

// Backend Connection setup | Sets Listening Port
const port = process.env.PORT || 8000; //holds the arbitrary port for serveer
app.listen(port, () => console.log(`Listening on port ${ port }...`))
