// ===========================
// Challenge #1: Setting types
// ===========================
// Given:
var myString: string;      //I can assign myString like this:
myString = "Bee stinger";  //Why is there a problem with this? What can I do to fix this?
myString = "9";            //FIXED by making 9 -> "9"

// ===========================
// Challenge #2: Setting types
// ===========================
// Given:
function sayHello(name: string) {
   return `Hello, ${name}!`;
}
console.log(sayHello("Kermit")); // This is working great:
console.log(sayHello("9"));      // FIXED by changing the type from 9 (int) -> "9"(string)


// ===========================
// Challenge #3: Setting types
// ===========================
// Given:
function fullName(firstName: string, lastName: string, middleName?: string) { //FIXED by adding "?" to check existance
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
console.log(fullName("Mary", "Moore", "Tyler"));   // This works:
console.log(fullName("Jimbo", "Jones"));           // FIXED by What do I do if someone doesn't have a middle name?


// ===========================
// Challenge #4: Setting types
// ===========================
// Given:
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = { firstName: "Christine", lastName: "Yang", belts: 2 }
const jay       = { firstName: "Jay", lastName: "Patel", belts: 4 }
console.log(graduate(christine));// This seems to work fine:
console.log(graduate(jay));      // This one had problems: FIXED by writing the correct property name "belts"


// =============================================
// Challenge #5: Classes and function parameters
// =============================================
class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string) {
         this.fullName = `${firstName} ${lastName}`
      }  debug() { console.log("Console.log() is my friend.") }
}

const shane = new Ninja("Juan", "Obama")  //FIXED: Re-writing the instance of "Ninja"... making an instance of ("Juan","Obama")
const turing = {                          //Since I'm having trouble making an instance of Ninja, I decided to do this:
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing",
    debug() {                             // FIXED: Added the missing property of a Ninja Class
      console.log("Console.log() is my friend.")
   }
}
function study(programmer: Ninja) {
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this is working:
console.log(study(turing))



// =============================
// Challenge #6: Arrow functions
// =============================
var increment = (x) =>  (x + 1);
console.log(increment(3))              // This works great:

var square = x => (x * x)              // This is not showing me what I want: FIXED by changing {x * x} -> (x * x )
console.log(square(4));

var multiply = (x, y) => (x * y)       // This was not working: FIXED by enclosing the x and y in (): x,y -> (x,y)
var math = (x, y) => {                 // This was not working: FIXED by assigning/storing the process in its descriptive variable
   let sum = (x + y)
   let product = (x * y)
   let difference = Math.abs(x - y)
   return [sum, product, difference]
}

// ========================================
// Challenge #7: Arrow functions and 'this'
// ========================================
class Elephant {
   constructor(public age: number){}
   birthday = () => { this.age++; }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function() {                // FIXED this by using an arrow function in the Elephant class.
   console.log(`Babar's age is ${babar.age}.`)
}, 2000)
