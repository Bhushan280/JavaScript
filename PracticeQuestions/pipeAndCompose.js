/**
 *Pipe
Create a pipe function that takes a series of functions and executes them
from left to right on an input value.
 *Compose
Create a compose function that takes a series of functions and executes them
from right to left on an input value


*/
const add = (x) => x + 1;
const sub = (x) => x - 1;
const mul = (x) => x * 2;

const arrayOfFunctionsLeft = [add, sub, mul];
const arrayOfFunctionsRight = [mul, sub, add];

const pipe = (...input) => {
    const [value, ...fns] = input;
    return fns.reduce((acc, fn) => {
        return fn(acc);
    }, value);
}

const compose = (...input) => {
    const [value, ...fns] = input;
    return fns.reduceRight((acc, fn) => {
        return fn(acc);
    }, value);
}

const res1 = pipe(5, add, sub, mul);
const res2 = compose(5, mul, sub, add);
console.log(res1);
console.log(res2);