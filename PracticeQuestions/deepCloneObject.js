

function deepClone(obj, seen = new WeakMap()) {
  // Base case: return primitives and functions as-is
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle circular references
  if (seen.has(obj)) {
    return seen.get(obj);
  }

  // Handle special built-in types
  if (obj instanceof Date) {
    // Handle Date
    // Create a new Date object with the same timestamp
    return new Date(obj);
  }

  if (obj instanceof RegExp) {
    // Handle RegExp
    // Create a new RegExp object with the same source and flags
    // Note: Flags are not directly available on the RegExp instance
    // but can be accessed using the `flags` property in modern JS>
    return new RegExp(obj.source, obj.flags);
    // Note: `flags` property is available in modern JS
    // If you need to support older environments, you can use:
  }

  // Handle Arrays or Objects
  const clone = Array.isArray(obj) ? [] : {};

  // Store reference before recursive cloning to avoid circular structure issues
  seen.set(obj, clone);

  // Recursively clone each property
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], seen);
    }
  }

  return clone;
}

const original = {
  name: 'Alice',
  age: 30,
  address: {
    city: 'Wonderland',
    country: 'Fantasy',
  },
  hobbies: ['reading', 'biking'],
  birthDate: new Date(1994, 5, 24),
  regexTest: /abc/i,
};

original.circularRef = original;

const cloned = deepClone(original);

// ✅ Test results
console.log(cloned);
console.log(cloned.circularRef === cloned); // true
console.log(cloned.circularRef !== original.circularRef); // true
console.log(cloned.address !== original.address); // true
console.log(cloned.hobbies !== original.hobbies); // true
console.log(cloned.birthDate !== original.birthDate); // true
console.log(cloned.regexTest !== original.regexTest); // true
console.log(cloned.address.city === original.address.city); // true
