// CALL
Function.prototype.myCall = function (context, ...args) {
    // Check if context is null or undefined
    if (context == null) {
        context = window; // Set context to global object (window in browsers)
    }
    // Generate a unique property name to avoid collision
    const uniqueId = Symbol();
    // Assign the function to the context
    context[uniqueId] = this;
    // Call the function with the context and arguments
    const result = context[uniqueId](...args);
    // Delete the unique property from the context
    delete context[uniqueId];
    // Return the result
    return result;
}

// APPLY
Function.prototype.myApply = function (context, args = []) {
    context = context ?? globalThis;
    // Check if context is null or undefined
    // If context is null or undefined, set it to the global object (window in browsers)
    // The globalThis property provides a standard way of accessing the global this value in any environment (browser, Node.js, etc.)
    context = typeof context === 'object' ? context : Object(context);
    // Generate a unique property name to avoid collision
    // The Object() function converts the value to an object
    
    const uniqueId = Symbol();
    // Assign the function to the context
    // The Symbol() function returns a unique and immutable value that can be used as an identifier for object properties
    context[uniqueId] = this;
    // Call the function with the context and arguments
    // The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
    const result = context[uniqueId](...args);
    // The apply() method executes the function immediately.
    delete context[uniqueId];
    // The apply() method changes the value of this in the original function.
    return result;
};

/*
// BIND
Function.prototype.myBind = function (context, ...args) {
    const originalFunction = this; // Store the original function
    // Return a new function
    return function (...newArgs) {
        return originalFunction.apply(context, [...args, ...newArgs]);
        // Call the original function with the context and combined arguments
        // The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
        // The apply() method executes the function immediately.
        // The apply() method changes the value of this in the original function.
        // The apply() method is useful when you want to pass an array of arguments to a function.
        // The apply() method can be used to pass arguments to a function.
    };
};

*/

//BIND
Function.prototype.myBind = function (...args1) {
    let obj = this;
    // Check if the first argument is null or undefined
    params = args.slice(1);
    // If the first argument is null or undefined, set it to the global object (window in browsers)
    return function (...args2) {
        return obj.apply(args1[0], [...params, ...args2])
        // Call the function with the context and combined arguments
    }
}
// The bind() method creates a new function that, when called, has its this keyword set to the provided value.
// The bind() method does not execute the function, it simply returns a new function with the specified this value.


Function.prototype.myBind2 = function (...args1) {
    let obj = this;
    // Check if the first argument is null or undefined
    let context = args1[0];
    // If the first argument is null or undefined, set it to the global object (window in browsers)
    let params = args1.slice(1);
    // The slice() method returns a shallow copy of a portion of an array into a new array object.
    return function (...args2) {
        // Call the function with the context and combined arguments
        return obj.call(context, ...params, ...args2);
        // The call() method calls a function with a given this value and arguments provided individually.
        // The call() method executes the function immediately.
        // The call() method changes the value of this in the original function.
    };
};



const name1 = {
    firstName: "Kashi",
    lastName: "Chouhan",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
const name2 = {
    firstName: "Chintu",
    lastName: "Chouhan"
}


const printMyName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state);
}

//using bind
name1.printFullName.myCall(name2);
// The call() method calls a function with a given this value and arguments provided individually.

//using apply
name1.printFullName.myApply(name2);
// The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).

//using bind
const bindedPrintFullName = name1.printFullName.myBind(name2);
bindedPrintFullName();
// The bind() method creates a new function that, when called, has its this keyword set to the provided value.
// The bind() method does not execute the function, it simply returns a new function with the specified this value.
// The bind() method does not change the value of this in the original function.
// The bind() method is useful when you want to pass a function as a callback and ensure that it has the correct this value.
// The bind() method can be used to pass arguments to a function.

printMyName.call(name2, "Maheshwar", "Madhya Pradesh");
// The call() method calls a function with a given this value and arguments provided individually.
printMyName.apply(name2, ["Maheshwar", "Madhya Pradesh"]);
// The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
const bindedPrintMyName = printMyName.bind(name2, "Maheshwar", "Madhya Pradesh");
bindedPrintMyName();
// The bind() method creates a new function that, when called, has its this keyword set to the provided value.
// The bind() method does not execute the function, it simply returns a new function with the specified this value.