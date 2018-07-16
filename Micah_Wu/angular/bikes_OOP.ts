class Bike {
    constructor(
        public price: number,
        public max_speed: string,
        public miles = 0)
        {}
    displayInfo = () => {
        var bike = `${this.price} ${this.max_speed} ${this.miles}`;
        console.log(bike);
        return this;
    }
    ride = () => {
        console.log('riding');
        this.miles += 10;
        return this;
    }
    reverse = () => {
        if(this.miles>5){
            this.miles -= 5
        }
        else{
            this.miles = 0
        }
        return this;
    }
}

let bike1 = new Bike(200, "25mph");
let bike2 = new Bike(300, "30mph");
let bike3 = new Bike(150, "15mph");

bike1.ride().ride().ride().ride().reverse().displayInfo()
bike2.ride().ride().reverse().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()