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
