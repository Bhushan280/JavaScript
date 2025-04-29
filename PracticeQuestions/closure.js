function outtest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outtest()('hello');
close();

// Output: 10 hello 20
// Explanation:
// 1. The variable `a` is declared in the global scope and has a value of 100.
// 2. The variable `b` is passed as an argument to the `outer` function and has a value of "hello".
// 3. The variable `c` is declared in the `outtest` function and has a value of 20.
// 4. The variable `a` is declared in the `inner` function and has a value of 10.
// 5. The `inner` function is returned from the `outer` function and is assigned to the variable `close`.
// 6. When `close` is called, it logs the values of `a`, `b`, and `c`.
// 7. The value of `a` is 10 (from the `inner` function), `b` is "hello" (passed to `outer`), and `c` is 20 (from the `outtest` function).
// 8. Therefore, the output is 10 hello 20.
// 9. The global variable `a` (100) is not accessible in the `inner` function because of the closure created by the `outer` and `inner` functions.
// 10. The `inner` function has access to the variables in its own scope, the `outer` function's scope, and the global scope.
// 11. However, since the `inner` function has its own variable `a`, it shadows the global variable `a`.
// 12. The `b` variable is passed as an argument to the `outer` function and is accessible in the `inner` function.
// 13. The `c` variable is declared in the `outtest` function and is accessible in the `inner` function because of the closure.
// 14. The `outtest` function returns the `outer` function, which returns the `inner` function.
// 15. The `close` variable holds the reference to the `inner` function, which is called later.
// 16. The `console.log` statement in the `inner` function logs the values of `a`, `b`, and `c`.
// 17. The output is 10 hello 20, which is the expected result.

// Advantages of Closures:
// 1. Data Privacy: Closures allow you to create private variables that are not accessible from the outside scope.
// 2. Function Factories: You can create functions with specific behavior by using closures.
// 3. Partial Application: You can create functions that are partially applied by using closures.
// 4. Maintaining State: Closures allow you to maintain state across function calls.
// 5. Encapsulation: Closures allow you to encapsulate functionality and create modules.
// 6. Memoization: You can use closures to cache results of expensive function calls.
// 7. Event Handlers: Closures are commonly used in event handlers to maintain access to variables in the outer scope.
// 8. Callbacks: Closures are often used in callbacks to maintain access to variables in the outer scope.
// 9. Asynchronous Programming: Closures are used in asynchronous programming to maintain access to variables in the outer scope.
// 10. Functional Programming: Closures are a key concept in functional programming and are used to create higher-order functions.
// 11. Code Organization: Closures help in organizing code by creating modules and namespaces.
// 12. Improved Readability: Closures can improve code readability by keeping related functionality together.
// 13. Avoiding Global Variables: Closures help in avoiding global variables by encapsulating functionality.
// 14. Reducing Side Effects: Closures help in reducing side effects by encapsulating functionality.

function test() {
  for (var i = 0; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}
test();
