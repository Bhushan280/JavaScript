const myArray = [1, 2, 3, 4, 5];

console.log(myArray);

const doubled = myArray.map(item => item * 2);

console.log(doubled);

const filtered = myArray.filter(item => item % 2 == 0);

console.log(filtered);

const sum = myArray.reduce((acc, item) => acc + item, 0);

console.log(sum);

const sumOfSquares = myArray.reduce((acc, item) => acc + item * item, 0);

console.log(sumOfSquares);

/*
All polyfills are prototype (or global) extensions—but not all prototype extensions are polyfills.
A polyfill implements something the ECMAScript spec actually defines; a plain prototype addition could be totally arbitrary.

*/
const myArray2 = [1, 2, 3, 4, 5];
//Core Insight: Creates a new array without changing the original.
//Core Insight: The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this));
        // this[i] is the current element
        // i is the index of the current element
        // this is the array itself
        // callback is the function passed to myMap
        // result is the new array that will be returned
    }
    return result;
}

const doubled2 = myArray2.myMap(item => item * 2);
console.log(doubled2);

//Core Insight: The filter method creates a new array with all elements that pass the test implemented by the provided function.
Array.prototype.filter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)) {
            result.push(this[i])
        }
        // this[i] is the current element
        // i is the index of the current element
        // this is the array itself
        // callback is the function passed to filter
        // result is the new array that will be returned
        // if the callback returns true, the current element is pushed to the result array
        // if the callback returns false, the current element is not pushed to the result array
    }
    return result;
}

const filtered2 = myArray2.filter(item => item > 3);
console.log(filtered2);


Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // Handle no initialValue (use first element as initial)
  if (accumulator === undefined) {
    if (this.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    // If no initialValue is provided, use the first element as the accumulator
      accumulator = this[0];
      // Set startIndex to 1 to skip the first element
    startIndex = 1; // Start processing from 2nd element
  }
  for (let i = startIndex; i < this.length; i++) {
    // Skip sparse elements (e.g., [1,,3])
      if (i in this) {
        // If the current index exists in the array, apply the callback
        // to the accumulator and the current element
        // this[i] is the current element
        // i is the index of the current element
        // this is the array itself
        // callback is the function passed to myReduce
        // accumulator is the value returned by the callback
        // accumulator is updated with each iteration
          accumulator = callback(accumulator, this[i], i, this);
          // this[i] is the current element
          // i is the index of the current element
          // this is the array itself
    }
  }
  return accumulator;
};

const sumOfSquares2 = myArray2.myReduce((acc, item) => acc + item * item, 0);
console.log(sumOfSquares2);