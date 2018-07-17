// =====================
// Assignment: Fizz Buzz
// ------------------------------------------------------------ [ Objectives ]
// <> function shall log 'FizzBuzz' if the number is divisible by both 3 and 5
// <> function shall log 'Fizz' if the number is only divisible by 3
// <> function shall log 'Buzz' if the number is only divisible by 5
// =================================================================

// Required module...
var readline = require('readline');
var module = require('./node_module')();

var FizzBuzz = readline.createInterface(process.stdin, process.stdout);
FizzBuzz.question("\n=> Please enter a number name <positive integers only>: ", function (answer) {
   var response = '';
   if (answer < 1 ) {
      console.log('   Sorry, that\'s not a positive integer number.');
   }
   else {
         console.log('\n=> Response:');
         for (var k=0; k < answer; k++) {
         if      (module.divBy3(k) && module.divBy5(k))  { response += '   ... FizzBuzz'; }
         else if (module.divBy3(k) && !module.divBy5(k)) { response += '\n   ... Fizz'; }
         else if (!module.divBy3(k) && module.divBy5(k)) { response += '\n   ... Buzz'; }
         else                                            { response += '\n   ... ' + k; }
      }
   }
   console.log(response);
   process.exit();
});
