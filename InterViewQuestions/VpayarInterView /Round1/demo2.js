//Deep Equal Function. Problem: Check if two objects are deeply equal.
// Example usage:
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objA1 = { a: 1, b: { c: 2 }, d: [objB] };
const objB1 = { a: 1, b: { c: 2 }, d: [objB] };
const objC1 = { a: 1, b: { c: 3 } };
const objC2 = { a: 1, b: { c: 3 }, d: objB };

// const objD1 = { a: 1, b: objD2 };
// const objD2 = { a: 1, b: objD1 };

function deepEqual(obj1, obj2, array = []) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 != 'object' ||
    typeof obj2 != 'object' ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  if (array.includes(obj1) || array.includes(obj2)) {
    return true;
  }

  array.push(obj1);
  array.push(obj2);

    const k1 = Object.keys(obj1);
    const k2 = Object.keys(obj2);

    if (k1.length != k2.length) return false;
    for (let key in k1) {
        // if(!k2.includes(key)) return false;
        if (!deepEqual(obj1[key], obj2[key], array)) return false;
    }

    return true;
}

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA1, objB1)); // true
console.log(deepEqual(objA, objC1)); // false
console.log(deepEqual(objA1, objC1)); // false
console.log(deepEqual(objA, { b: { c: 2 }, a: 1 })); // true
console.log(deepEqual(objA1, { d: [objB], a: 1, b: { c: 2 } })); // true
// console.log(deepEqual(objD1, objD2));
