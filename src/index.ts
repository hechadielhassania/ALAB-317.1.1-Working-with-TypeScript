class NCycle<T> {
    make: T | T[];
    model: T | T[];
  
    constructor(make: T | T[], model: T | T[], public wheels: number) {
      this.make = make;
      this.model = model;
    }
  
    print(index?: number): string {
      if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
        return `This is a ${this.make} ${this.model} NCycle.`;
      } else if (Array.isArray(this.make) && Array.isArray(this.model) && index !== undefined &&
                 index >= 0 && index < this.make.length && index < this.model.length) {
        return `This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`;
      } else {
        return "This NCycle was not created properly.";
      }
    }
  
    printAll(): string {
      if (Array.isArray(this.make) && Array.isArray(this.model) && this.make.length === this.model.length) {
        let result = "";
        for (let i = 0; i < this.make.length; i++) {
          result += `This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.\n`;
        }
        return result;
      } else {
        return "This NCycle was not created properly.";
      }
    }
  }
  
  // Test data
  const testCycle1 = new NCycle<number>(1, 2, 3);
  const testCycle2 = new NCycle<string>("This", "That", 4);
  const testCycle3 = new NCycle<string>("Make", "Model", 4);
  const makes4 = ["Volkswagen", "Tesla", "Audi"];
  const models4 = ["Passat", "Model X", "A4"];
  const testCycle4 = new NCycle<string[]>(makes4, models4, 4);
  const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const models5 = [1, 1, 2, 3, 5];
  const testCycle5 = new NCycle<number[]>(makes5, models5, 0);
  
  // Display results in HTML
  document.addEventListener("DOMContentLoaded", function() {
    // Test data
    const testCycle1 = new NCycle<number>(1, 2, 3);
    const testCycle2 = new NCycle<string>("This", "That", 4);
    const testCycle3 = new NCycle<string>("Make", "Model", 4);
    const makes4 = ["Volkswagen", "Tesla", "Audi"];
    const models4 = ["Passat", "Model X", "A4"];
    const testCycle4 = new NCycle<string[]>(makes4, models4, 4);
    const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const models5 = [1, 1, 2, 3, 5];
    const testCycle5 = new NCycle<number[]>(makes5, models5, 0);
  
    // Display results in HTML
    const testCycle1Element = document.getElementById("testCycle1")!;
    const testCycle2Element = document.getElementById("testCycle2")!;
    const testCycle3Element = document.getElementById("testCycle3")!;
    const testCycle4Element = document.getElementById("testCycle4")!;
    const testCycle5Element = document.getElementById("testCycle5")!;
    const testResultElement = document.getElementById("testResult")!;
  
    testCycle1Element.innerText = testCycle1.print() + "\n" + testCycle1.printAll();
    testCycle2Element.innerText = testCycle2.print() + "\n" + testCycle2.printAll();
    testCycle3Element.innerText = testCycle3.print() + "\n" + testCycle3.printAll();
    testCycle4Element.innerText = testCycle4.print() + "\n" + testCycle4.printAll();
    testCycle5Element.innerText = testCycle5.print() + "\n" + testCycle5.printAll();
    testResultElement.innerText = "Cannot call add() because testCycle2.make is not an array of numbers.";
  });
  
  