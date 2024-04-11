// The NCycle class accepts a generic type T.
// The make and model properties can either be of type T or arrays of type T.
// The print method logs different messages based on the type of make and model properties and the provided index.
// The printAll method logs all matching pairs of make and model arrays if applicable.
var NCycle = /** @class */ (function () {
    function NCycle(make, model) {
        this.make = make;
        this.model = model;
    }
    NCycle.prototype.print = function (index) {
        if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
            console.log("This is a ".concat(this.make, " ").concat(this.model, " NCycle."));
        }
        else if (Array.isArray(this.make) && Array.isArray(this.model) && index !== undefined &&
            index >= 0 && index < this.make.length && index < this.model.length) {
            console.log("This NCycle has a ".concat(this.make[index], " ").concat(this.model[index], " at ").concat(index, "."));
        }
        else {
            console.log("This NCycle was not created properly.");
        }
    };
    NCycle.prototype.printAll = function () {
        if (Array.isArray(this.make) && Array.isArray(this.model) && this.make.length === this.model.length) {
            for (var i = 0; i < this.make.length; i++) {
                console.log("This NCycle has a ".concat(this.make[i], " ").concat(this.model[i], " at ").concat(i, "."));
            }
        }
        else {
            console.log("This NCycle was not created properly.");
        }
    };
    return NCycle;
}());
// Example usage
var singleNCycle = new NCycle("Brand", "Model");
singleNCycle.print(); // This is a Brand Model NCycle.
var arrayNCycle = new NCycle(["Brand1", "Brand2"], ["Model1", "Model2"]);
arrayNCycle.print(1); // This NCycle has a Brand2 Model2 at 1.
arrayNCycle.printAll();
// This NCycle has a Brand1 Model1 at 0.
// This NCycle has a Brand2 Model2 at 1.
