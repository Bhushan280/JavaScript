const name1 = {
    firstName: "Kashi",
    lastName: "Chouhan",

    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
const printMuyName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}
const name2 = {
    firstName: "Chintu",
    lastName: "Chouhan"
}
console.log(name1.printFullName());

// The call() method calls a function with a given this value and arguments provided individually.
// The call() method executes the function immediately.
// The call() method changes the value of this in the original function.

console.log(name1.printFullName.bind(name2)());

// () used to call the function immediately
// The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).

console.log(name1.printFullName.apply(name2)); // () used to call the function immediately

// The apply() method executes the function immediately.
// The apply() method changes the value of this in the original function.
// The apply() method is useful when you want to pass an array of arguments to a function.
// The bind() method creates a new function that, when called, has its this keyword set to the provided value.
// The bind() method can be used to create a new function with a specific this value and arguments.
// The bind() method does not execute the function, it simply returns a new function with the specified this value.
// The bind() method can be used to create a new function with a specific this value and arguments.

const bindedPrintFullName = name1.printFullName.bind(name2);
console.log(bindedPrintFullName());

// () used to call the function immediately
// The bind() method does not change the value of this in the original function.        
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// The bind() method does not execute the function, it simply returns a new function with the specified this value.
// The bind() method does not change the value of this in the original function.
// The bind() method is useful when you want to pass a function as a callback and ensure that it has the correct this value.

printMuyName.apply(name2, ["Maheshwar", "Madhya Pradesh"]); // () used to call the function immediately

// The call() method calls a function with a given this value and arguments provided individually.

printMuyName.call(name2, "Maheshwar", "Madhya Pradesh"); // () used to call the function immediately

// The call() method executes the function immediately.
// The call() method changes the value of this in the original function.
// The call() method is useful when you want to pass a function as a callback and ensure that it has the correct this value.
// The call() method can be used to pass arguments to a function.