// with throttling -- > 
// const loggerFunc = () => {
//   console.count("Throttled Function");
// };

// const betterLoggerFunction = throttle(loggerFunc, 1000);
// window.addEventListener("resize", betterLoggerFunction);


const loggerFunc = () => {
  console.count("Throttled Function");
};


const throttle = (fn, limit) => {
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

const betterLoggerFunction = throttle(loggerFunc, 100);
window.addEventListener("resize", betterLoggerFunction);


//Without Throttling 🔥 This will call normalFunc many times per second, overwhelming the browser.

// const normalFunc = () => {
//   console.count("Normal Function");
// };
// window.addEventListener("resize", normalFunc);
