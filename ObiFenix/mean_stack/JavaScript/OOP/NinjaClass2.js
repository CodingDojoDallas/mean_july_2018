// ==========================
// Assignment: Ninja Class II
// ==========================

function Ninja (name) {
    this.name = name;     // no private because of 'this'
    this.health = 100;    // no private because of 'this'
    var speed = 3;        // shall be private
    var strength = 3;     // shall be private

    // displays ninja's name
    this.sayName = function () {
        console.log (this.name);
        return this;
    };

    // displays ninja's stats
    this.showStats = function () {
        console.log (this.name, strength, speed, this.health);
        return this;
    };

    // displays ninja's increase health
    this.drinkSake = function (){
        this.health += 10;
        return this;
    };

    // displays ninja's decrease health
    this.punch = function (ninja) {
        ninja.health -= 10;
        console.log (this.name + ' punched ' + ninja.name + ', they lost 10 health.');
        return this;
    };

    // displays ninja kick event with a 15 health decrease
    this.kick = function (ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 15;
            console.log (this.name + ' kicked ' + ninja.name + ', they lost 15 health.');
            return this;
        }
        else {
            return 'this is not another ninja!';
        }
    };
}

// Creates 3 instances of 'Ninja' object
n1 = new Ninja('Dan');
n2 = new Ninja('Edward');
n3 = new Ninja('Jacob');

// Accessing the object methods in 'Ninja'
n1.drinkSake().showStats().sayName();
n2.showStats();
n1.kick(n3);
n3.showStats();
