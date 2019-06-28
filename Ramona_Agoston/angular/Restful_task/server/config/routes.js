var people = require('../controllers/people')

module.exports = function(app) {
  app.get('/people', people.people);
}
