// =======================
// Assignment: Ninja Class
// =======================

function Ninja(name) { 
    this.name = name;     // no private because of 'this'
    this.health = 100;    // no private because of 'this'
    var speed = 3;        // shall be private
    var strength = 3;     // shall be private

    this.sayName = function () {
        console.log(this.name);
        return this;
    }
    this.showStats = function () {
        console.log(this.name, strength, speed, this.health);
        return this;
    }
    this.drinkSake = function () {
        this.health += 10;
        return this;
    }
}

// Creates 3 instances of 'Ninja' object 
n1 = new Ninja('Dan');
n2 = new Ninja('Edward');
n3 = new Ninja('Jacob');

// Accessing the object methods in 'Ninja'
n1.drinkSake().showStats().sayName();
n2.showStats();
