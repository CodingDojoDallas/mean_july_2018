var People = require('../models/people')

module.exports = {
  people: function(req, res) {
    console.log ('this is people.js ')
    people = People.find({}, function(err, people) {
      console.log('find people')
      if (err) {
        res.json({'err': 'Ooooopsies'});
      }
      else {
        res.json(people);
      }
    })
  }
}
