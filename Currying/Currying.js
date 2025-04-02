// let multiply = function (x,y) {
//     console.log(x*y);
// }
let multiply = function (x) {
    return function (y) {
        console.log(x*y);
    }
}



let MyltoiplyOfTwo = multiply.bind(this, 2);

let MyltoiplyOfThree = multiply.bind(this, 3);

MyltoiplyOfTwo(5);

MyltoiplyOfThree(5);


let two = multiply(2);
two(3);



// For Revision
// Function currying

// 1) Bind method,
// Take a function, modify it by attaching bind to define a parameter (or method)

// 2) Closure method
// Take a function, Define parameter in closure style, define another parameter by just defining it while using as curried version



//🔹 Without Currying (Regular n-ary function):


const add = (a, b, c) => a + b + c;
console.log(add(1, 2, 3)); // 6

// 🔹 With Currying (Unary functions in sequence):

const curriedAdd = a => b => c => a + b + c;
console.log(curriedAdd(1)(2)(3)); // 6


//Using Closure Style Currying:

let multiplyt = function(x) {
    return function(y) {
        console.log(x * y);
    }
};

let double = multiplyt(2); // Returns function(y) { console.log(2 * y); }
double(5); // 10

let triple = multiplyt(3);
triple(5); // 15



//🧰 Currying Using .bind() (Partial Application)

let multiplyw = function(x, y) {
    console.log(x * y);
};

let multiplyByTwo = multiplyw.bind(this, 2); // Fix x = 2
multiplyByTwo(5); // 10

let multiplyByThree = multiplyw.bind(this, 3);
multiplyByThree(5); // 15
