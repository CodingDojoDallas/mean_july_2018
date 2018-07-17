var my_module = require('./node_module')();     //notice the extra invocation parentheses!

var num1=2,
    num2=5;

// Requist: add two numbers (e.g. math.add(2,3) should return 5)
// Response:
console.log('====================================');
console.log('The addition between '+ num1 + ' and ' + num2 + ' = ' + my_module.add(num1, num2));
console.log('====================================');

// Requist: multiply two numbers (e.g. math.multiply(2,3) should return 6)
// Response:
console.log('====================================');
console.log('The product between '+ num1 + ' and ' + num2 + ' = ' + my_module.multiply(num1, num2));
console.log('====================================');

// Requist: add two numbers (e.g. math.square(2) should return 4)
// Response:
console.log('====================================');
console.log('The square number of '+ num1 + ' = ' + my_module.square(num1));
console.log('====================================');

// Requist: return a random number between the two numbers (e.g. math.random(1,35) should return a random number between 1 and 35)
// Response:
console.log('====================================');
console.log(my_module.random(num1, num2) + ' is a random number between '+ num1 + ' and ' + num2);
console.log('====================================');