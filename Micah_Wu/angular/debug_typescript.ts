//1
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = 9;

var myString: string;
myString = "Bee stinger";
var myNumber: number;
myNumber = 9; //it is a number and not a string and a new variable with a type "number" must be created.
//or myString = "9";

//2
function sayHello(name: string){
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello(9));
//console.log(sayHello("9")); Just make it a string.

//3
function fullName(firstName: string, lastName: string, middleName: string){
//function fullName(firstName: string, lastName: string, middleName?: string){ (add a question mark as optional parameter)
let fullName = `${firstName} ${middleName} ${lastName}`;
return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));


//4
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 //belts not belt
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));

//5
 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug () {
       console.log("Console.log() is my friend.")
    }
 }
 const shane = new Ninja("tom","jerry"); //added new before Ninja & arguments inside of Ninja
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
     lastName: "Turing",
     debug(){ //added a debug function like class Ninja so that argument in function study would have same parameters.
       console.log("Console.log() is my friend.")
    }
 }
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 console.log(study(turing));


//6
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = x,y => x * y;
// Nor is this working:
var math = (x, y) => let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];

 var increment = x => x + 1;
console.log(increment(3));
var square = x => x * x; //removed {} for square function
console.log(square(4));
var multiply = (x,y) => x * y; //added () on x,y arguments
var math = (x, y) => { //added {} to contain math function
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

//7
class Elephant {
    constructor(public age: number){}
    birthday = function(){
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.


class Elephant {
    constructor(public age: number){}
    birthday = () => { //removed function and wrote it the es6 way
       this.age++; //now this.age becomes a parameter of class Elephant
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000) 
