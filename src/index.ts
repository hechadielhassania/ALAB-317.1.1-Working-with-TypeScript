// Added appropriate types for properties and method parameters in the Vehicle class.
// Used a union type "started" | "stopped" for the status property in the Vehicle class.
// Adjusted the Car and MotorCycle classes according to TypeScript's checks. No changes were needed in this case.
// Modified the printStatus function to accept a parameter of type Vehicle.
// Corrected the status check in the printStatus function from "running" to "started".
// Fixed the output statements below the function definitions to correctly access the make, wheels, and model properties of the instances.

class Vehicle {
    make: string;
    model: string;
    wheels: number;
    status: "started" | "stopped"; // Union type for status
  
    constructor(make: string, model: string, wheels: number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
      this.status = "stopped";
    }
  
    start(): void {
      this.status = "started";
    }
  
    stop(): void {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 4);
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle: Vehicle): void {
    if (vehicle.status === "started") { // Corrected status check
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.model);
  