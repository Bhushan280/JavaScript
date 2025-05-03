const _ = require('lodash');

const original = { a: 1, nested: { b: 2 }, fn: () => console.log('hi') };
const deepCopy = _.cloneDeep(original);

deepCopy.nested.b = 99;

console.log(original.nested.b); // Output: 2 (unchanged)
console.log(deepCopy.nested.b); // Output: 99
