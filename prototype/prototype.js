// Object vs Function Prototypes
// Object Literal:

let x = {};
console.log(x.__proto__);     // ✅ Inherits from Object.prototype
console.log(x.prototype);     // ❌ undefined (only functions have this)


// Function Declaration:
function myFunc() {}
console.log(myFunc.__proto__);   // ✅ Function.prototype
console.log(myFunc.prototype);  // ✅ Used to set prototype for new objects

// Object from Constructor:
function Person() {}
let y = new Person();

console.log(y.__proto__);      // ✅ Person.prototype
console.log(y.prototype);      // ❌ undefined (y is an object, not a function)


// Custom Inheritance Example
const parent = {
  greet: function () {
    console.log("Hello from parent");
  }
};

const child = Object.create(parent);
child.name = "Child";

child.greet(); // Inherited from parent

Object.getPrototypeOf(obj);          // ✅ Safe way to get prototype
//Object.setPrototypeOf(obj, proto);   // ✅ Safe way to set prototype


Array.prototype.sayHi = function () {
  console.log("Hi from array!");
};

[1, 2, 3].sayHi(); // Works
