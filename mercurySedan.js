//this includes the vehicle class as a module
import Vehicle from './vehicleBaseClass.js';

//this shows how to call from this module...
let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.needsService = false;
    }

    start() {
        if(this.fuel > 0) {
        console.log('The car started')
        return this.started = true;
    } else {
        console.log('The car did not start')
        return this.started = false;
    }
    }

    scheduleService(mileage) {
        if(this.mileage > 30000) {
        this.needsServiceService = true 
        return this.needsService;
    } else {
        this.needsService = false;
        console.log('Your car does not need maintenance')
        }
    }

    loadPassenger(num) {
        if (this.passengers < this.maxPassengers) {
            if ((num + this.passengers) <= this.maxPassengers) {
                this.passengers = num;
                console.log("Passenger loaded. Current passenger count:", this.passengers);
            } else {
                console.log(this.model + " " + this.make + " does not have enough space.");
            }
        } else {
            console.log("Passenger loaded. Current passenger count:", this.passengers);
        }
    }
}
//After you write the derived Car class, you should test it out.
let theBestCar = new Car("Toyota", "Camry", "2022", "White", 5000)
theBestCar.start()
theBestCar.scheduleService()
theBestCar.loadPassenger()
//Note: You can code your derived Car class here or make a file named index.js and do it there.

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

// Create at least two new instances of the Car class and test them here:
