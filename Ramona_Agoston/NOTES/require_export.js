require and module.exports are the two most important tools when modularizing your code.

========EXAMPLE=================================================================
// Module.exports
// >>dictionary.js<<
var dictionary = ['apple', 'banana', 'peanut', 'butter', 'grapes', 'jelly'];
module.exports = dictionary

// REQUIRE
// >>search.js<<
var dictionary = require('./dictionary.js');
function search(word, dictionary) {
  for(w in dictionary) {
    if(dictionary[w] == word) {
      return true;
    }
  }
  return false;
}

=========EXPLANATION============================================================
In search.js we require dictionary.js; here, require is a function that takes in a parameter. The parameter is the location of the file we are requiring. Require first executes the code in the file and then passes back the value inside of module.exports as a return value.

Since we pass the dictionary variable into the module.exports, when we require it we can store the returned value into another variable.
