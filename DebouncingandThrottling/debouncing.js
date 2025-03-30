console.log("Debouncing and Throttling in JavaScript");

// Debouncing
let counter = 0;
const getData = () => {
    console.log("Fetching Data..", counter++);
}

const doSonmething = function (fn, d) {
    let timer
    return function () {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context,arguments)
        }, d);
    }
}
const betterFunction = doSonmething(getData, 300);