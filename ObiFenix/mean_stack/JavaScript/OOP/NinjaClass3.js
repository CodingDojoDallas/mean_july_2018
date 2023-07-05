// ===========================
// Assignment: Ninja Class III
// ===========================

//                                                                  [ PART 1 ]
class Ninja {
   constructor (name) {
      this.name = name;
      this.health = 100;
      this.speed = 3;
      this.strength = 3;
   }

   // displays ninja's name
   sayName () {
      console.log(this.name);
      return this;
   }

   // displays ninja's stats
   showStats () {
      console.log(this.name, this.strength, this.speed, this.health);
      return this;
   }

   // displays ninja's increase health
   drinkSake () {
      this.health += 10;
      return this;
   }

   // displays ninja's decrease health
   punch (ninja) {
      ninja.health -= 10;
      console.log( this.name + ' punched ' + ninja.name + ', they lost 10 health.');
      return this;
   }

   // displays ninja kick event with a 15 health decrease
   kick (ninja) {
      if (ninja instanceof Ninja) {
         ninja.health -= 15;
         console.log( this.name + ' kicked ' + ninja.name + ', they lost 15 health.');
         return this;
      }  else { return 'this is not another ninja!'; }
   }
}

//                                                                   [ PART 2 ]
class Sensei extends Ninja {
   constructor (name) {
      super(name);
      this.wisdom = 10;
   }
   // displays ninja's stats
   showStats () {
      console.log(this.name,this.strength,this.speed,this.health,this.wisdom);
      return this;
   }
   // displays Sensei's wisdom message
   speakWisdom () {
      super.drinkSake();
      console.log('This is a wise message.');
      return this;
   }
}

//                                                                   [ Main ]
// Creates 3 instances of 'Ninja' objects and one 'Sensei' object
n1 = new Ninja('Dan');
n2 = new Ninja('Edward');
n3 = new Ninja('Jacob');
s1 = new Sensei('Elizabeth');

// Accessing the object methods in 'Ninja' class / Object
n1.drinkSake().showStats().sayName();
n2.showStats();
n1.kick(s1);
n3.showStats();
s1.showStats();
s1.speakWisdom().showStats();
