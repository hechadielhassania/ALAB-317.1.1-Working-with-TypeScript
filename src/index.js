var NCycle = /** @class */ (function () {
    function NCycle(make, model, wheels) {
        this.wheels = wheels;
        this.make = make;
        this.model = model;
    }
    NCycle.prototype.print = function (index) {
        if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
            return "This is a ".concat(this.make, " ").concat(this.model, " NCycle.");
        }
        else if (Array.isArray(this.make) && Array.isArray(this.model) && index !== undefined &&
            index >= 0 && index < this.make.length && index < this.model.length) {
            return "This NCycle has a ".concat(this.make[index], " ").concat(this.model[index], " at ").concat(index, ".");
        }
        else {
            return "This NCycle was not created properly.";
        }
    };
    NCycle.prototype.printAll = function () {
        if (Array.isArray(this.make) && Array.isArray(this.model) && this.make.length === this.model.length) {
            var result = "";
            for (var i = 0; i < this.make.length; i++) {
                result += "This NCycle has a ".concat(this.make[i], " ").concat(this.model[i], " at ").concat(i, ".\n");
            }
            return result;
        }
        else {
            return "This NCycle was not created properly.";
        }
    };
    return NCycle;
}());
// Test data
var testCycle1 = new NCycle(1, 2, 3);
var testCycle2 = new NCycle("This", "That", 4);
var testCycle3 = new NCycle("Make", "Model", 4);
var makes4 = ["Volkswagen", "Tesla", "Audi"];
var models4 = ["Passat", "Model X", "A4"];
var testCycle4 = new NCycle(makes4, models4, 4);
var makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var models5 = [1, 1, 2, 3, 5];
var testCycle5 = new NCycle(makes5, models5, 0);
// Display results in HTML
document.addEventListener("DOMContentLoaded", function () {
    // Test data
    var testCycle1 = new NCycle(1, 2, 3);
    var testCycle2 = new NCycle("This", "That", 4);
    var testCycle3 = new NCycle("Make", "Model", 4);
    var makes4 = ["Volkswagen", "Tesla", "Audi"];
    var models4 = ["Passat", "Model X", "A4"];
    var testCycle4 = new NCycle(makes4, models4, 4);
    var makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var models5 = [1, 1, 2, 3, 5];
    var testCycle5 = new NCycle(makes5, models5, 0);
    // Display results in HTML
    var testCycle1Element = document.getElementById("testCycle1");
    var testCycle2Element = document.getElementById("testCycle2");
    var testCycle3Element = document.getElementById("testCycle3");
    var testCycle4Element = document.getElementById("testCycle4");
    var testCycle5Element = document.getElementById("testCycle5");
    var testResultElement = document.getElementById("testResult");
    testCycle1Element.innerText = testCycle1.print() + "\n" + testCycle1.printAll();
    testCycle2Element.innerText = testCycle2.print() + "\n" + testCycle2.printAll();
    testCycle3Element.innerText = testCycle3.print() + "\n" + testCycle3.printAll();
    testCycle4Element.innerText = testCycle4.print() + "\n" + testCycle4.printAll();
    testCycle5Element.innerText = testCycle5.print() + "\n" + testCycle5.printAll();
    testResultElement.innerText = "Cannot call add() because testCycle2.make is not an array of numbers.";
});
