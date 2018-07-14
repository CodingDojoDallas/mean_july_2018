// ==================================
// Assignment: TypeScript Bikes - OOP
// ==================================

class Bike {
  miles: number;

  constructor(
    public price: number,
    public max_speed: string) {
      this.miles = 0;
  }

  // Require Methods...
  ride = () => {      // display the bike's current speed after being increased by 10 m/h
    this.miles += 10;
    console.log(`Riding @ ${this.miles} miles/h\n`);
    return this;
  };
  reverse = () => {   // display the bike's speed after being decreased by 5 m/h
    this.miles -= 5;
    console.log(`Reversing by ${this.miles} miles/h\n`);
    return this;
  };
  displayInfo = () => {// display the bike's price, maximum speed, and the total miles.
    console.log(`Bike info:
                Price:    $${this.price}
                Max Speed: ${this.max_speed}
                Miles:     ${this.miles} miles`);
               return this;
  };
}

// Creates 3 objects w/ an instances of 'Bike'
var bike1 = new Bike(200, '210 mps');
var bike2 = new Bike(296, '210 mps');
var bike3 = new Bike(256, '210 mps');

bike1.ride().reverse().displayInfo();
bike2.ride().reverse().displayInfo();
bike3.ride().reverse().displayInfo();
