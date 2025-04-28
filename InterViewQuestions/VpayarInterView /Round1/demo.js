console.log('start'); // 1 --> start

function a() {
  setTimeout(() => {
    console.log('hello - 1');
  }, 0);
  setTimeout(() => {
    console.log('hello - 2');
  }, 0);
}

function b() {
  return new Promise((resolve) => {
    console.log('promise - 1'); //5 --> P1
    resolve(1);
  });
}

function c() {
  return new Promise((resolve) => {
    console.log('promise - 2'); //
    setTimeout(() => {
      resolve(1);
    }, 0);
  });
}

let g = 10;

const f = ((h) => {
  return (g) => {
    return g + g + h + h + 30;
  };
})(g);

const h = 20;
console.log(f(h)); // 2 --> 90
a();

const promise1 = b();

promise1.then(() => {
  console.log('promise - 1 - res'); //
});

const promise2 = c();

promise2.then(() => {
  console.log('promise - 2 - res'); //6
});

console.log('end'); //3

/*
1. start 
2. f(h) o/p => 90
3. cl Promise 1
4. cl Promise 2 
5. end
6. P1 res
7. P2 res
8. hello-1
*/
