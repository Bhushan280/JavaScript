function getData(){
    console.log("hey");
}

const debounce = function(fn, d) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer); // cancel previous timer
        timer = setTimeout(() => {
            fn.apply(context, args); // correct usage
        }, d);
    }
}

const delay = 250;
const betterFunction = debounce(getData, delay);
