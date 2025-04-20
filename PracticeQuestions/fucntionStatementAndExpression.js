// Function Statement and Function Expression
// Function Statement:
// A function statement (also known as a function declaration) is a way to define a function in JavaScript.
// It starts with the `function` keyword, followed by the function name, parentheses for parameters, and a block of code.
// Function statements are hoisted, meaning they can be called before they are defined in the code.
// Example of Function Statement:
function greet() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!
// Explanation:
// 1. The `greet` function is defined using a function statement.
// 2. It logs "Hello, World!" to the console.
// 3. The function can be called before its definition due to hoisting.     
// 4. The function is called using `greet()`, which executes the code inside the function.
// 5. The output is "Hello, World!".
// 6. Function statements are hoisted, so you can call the function before its definition.
// 7. Function statements are defined using the `function` keyword, followed by the function name and parentheses.
// 8. Function statements can have parameters, which are defined inside the parentheses.

// Function Expression
// example of Function Expression:
const greet = function() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!
// Explanation:
// 1. The `greet` function is defined using a function expression.