const obj = {
  name: 'Bhushan',
  phone: 9111086187,
  address: {
    street: '123 Main St',
    city: 'Pune',
    location: {
      lat: 18.5204,
      lng: 73.8567,
      region: 'Maharashtra'
    },
    email: {
      personal: 'bhushan.personal@example.com',
      company: 'bhushan@company.com'
    }
  },
  ride: '250 Gixxer'
};

const flattern = (obj) => {
  // ✅ declare a fresh result object on each call
  let result = {};

  for (const key in obj) {
    const value = obj[key];

    // if it’s a plain object, recurse…
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const temp = flattern(value);

      // …and merge its flattened keys back with a “parent.child” name
      for (const nestedKey in temp) {
        result[key + '.' + nestedKey] = temp[nestedKey];
      }
    } else {
      // otherwise just copy the primitive/array/etc.
      result[key] = value;
    }
  }

  return result;
};



const flatternOneLoop = (obj, parent = '') => {
  let result = {};

  for (const key in obj) {
    // use "." here to match the two-loop version
    const fullKey = parent ? `${parent}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      // merge in child results
      Object.assign(result, flatternOneLoop(obj[key], fullKey));
    } else {
      result[fullKey] = obj[key];
    }
  }

  return result;
};


// now both of these will produce the exact same output:
console.log(flattern(obj));
console.log(flatternOneLoop(obj));
