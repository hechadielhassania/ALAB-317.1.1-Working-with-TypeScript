// The NCycle class accepts a generic type T.
// The make and model properties can either be of type T or arrays of type T.
// The print method logs different messages based on the type of make and model properties and the provided index.
// The printAll method logs all matching pairs of make and model arrays if applicable.

class NCycle<T> {
    make: T | T[];
    model: T | T[];
  
    constructor(make: T | T[], model: T | T[]) {
      this.make = make;
      this.model = model;
    }
  
    print(index?: number): void {
      if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
        console.log(`This is a ${this.make} ${this.model} NCycle.`);
      } else if (Array.isArray(this.make) && Array.isArray(this.model) && index !== undefined &&
                 index >= 0 && index < this.make.length && index < this.model.length) {
        console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`);
      } else {
        console.log("This NCycle was not created properly.");
      }
    }
  
    printAll(): void {
      if (Array.isArray(this.make) && Array.isArray(this.model) && this.make.length === this.model.length) {
        for (let i = 0; i < this.make.length; i++) {
          console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
        }
      } else {
        console.log("This NCycle was not created properly.");
      }
    }
  }
  
  // Example usage
  const singleNCycle = new NCycle("Brand", "Model");
  singleNCycle.print(); // This is a Brand Model NCycle.
  
  const arrayNCycle = new NCycle(["Brand1", "Brand2"], ["Model1", "Model2"]);
  arrayNCycle.print(1); // This NCycle has a Brand2 Model2 at 1.
  
  arrayNCycle.printAll();
  // This NCycle has a Brand1 Model1 at 0.
  // This NCycle has a Brand2 Model2 at 1.
  