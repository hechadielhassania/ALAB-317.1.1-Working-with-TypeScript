class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    this.status = "stopped"; // Moved status initialization to constructor
  }
  
  start() {
    this.status = "running"; // Corrected status from "started" to "running"
  }
  
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4); // Changed "four" to 4
  }
}

class MotorCycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

function printStatus(vehicle) {
  if (vehicle.status === "running") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase()); // Corrected "toUppercase()" to "toUpperCase()"

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1; // Decreased wheels by 1
console.log(myBuick.wheels);
console.log(myBuick.model); // Corrected "mdl" to "model"
