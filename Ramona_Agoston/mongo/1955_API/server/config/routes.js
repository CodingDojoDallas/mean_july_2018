//routes file for 1955 API

//require logic controllers
const control = require('../controllers/1955.js');

//export routes to server.js
module.exports = function(app){

    app.get('/', control.index);
    app.get('/new/:name', control.create);
    app.get('/remove/:name', control.destroy);
    app.get('/:name', control.show);
}
