// Implement a debouncing function in JavaScript that delays the execution of a given function until after a specified wait time has passed since the last call.

function debounce(func, delays) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer  = setTimeout(() => {
            func.apply(context, args);;
        }, delays);
    }
    
}
function debounce2(func, delay) {  
  let timeout;  
  return (...args) => {  
    clearTimeout(timeout);  
    timeout = setTimeout(() => func(...args), delay);  
  };  
}  

const fn = debounce((message) => {
 console.log(message);
}, 300);
// Simulate rapid function calls
fn("Hello");
fn("Hello, World!");
fn("Debounced!"); // Only this should log after 300ms
setTimeout(() => {
 fn("Debounced twice");
},400)
// output 
// Debounced!
// Debounced twice



function throttle(fn, limit) {
    let flag = true;
    return function () {
        let context = this;
        let args = arguments;
        if (flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    };
};

function throttl2(func, limit) {  
  let lastRun = 0;  
  return (...args) => {  
    const now = Date.now();  
    if (now - lastRun >= limit) {  
      func(...args);  
      lastRun = now;  
    }  
  };  
}  
const fn2 = throttl2((message) => {
 console.log(message);
}
, 1000);
// Simulate rapid function calls
fn2("Hello");
fn2("Hello, World!");
fn2("Throttled!"); // Only this should log immediately
setTimeout(() => {
 fn2("Throttled twice");
},100)
// output
// Hello
// Hello, World!
// Throttled!
// Throttled twice
// Note: In a real-world scenario, you would want to use a more robust implementation of debounce and throttle functions,