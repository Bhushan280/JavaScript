// Perform below currying operation
// You are given a function
// const sum = (a, b, c, d, e) => a+b+c+d+e.
// Now write a currying function
// const curriedSum = curry(sum)
// , which will print the sum irrespective of how the arguments are being passed.

const sum = (a, b, c, d, e) => a + b + c + d + e;
function curry(f1) {
    // argument not less then or more then 5
    return function curried(...args) {
        if (args.length === f1.length) {
            return f1(...args);
        }
        else {
            return function (...next) {
                return curried(...args, ...next);
            }
        }
    };
}
const curriedSum = curry(sum);

// Example;
console.log(curriedSum(1, 2, 3, 4, 5)); // output 15
console.log(curriedSum(1, 2)(3)(4, 5)); // output 15
console.log(curriedSum(1)(2, 3)(4)(5)); // output 15
console.log(curriedSum(1)(2)(3, 4, 5)); // output 15
console.log(curriedSum(1, 2, 3)(4)(5)); // output 15
