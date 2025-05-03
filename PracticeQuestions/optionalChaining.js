// Optional Chaining is the feature in Javascript that allow you to access properties of an object of an array without having to check wheather the object or array is null or undefined first. It is represented by the ?. operator and can be used to concisely access deeply nested properties without having to erite a long chain of if statement to check for null or undefined values.

const user = {
  name: 'kashi',
  age: 29,
  address: {
    street: 'Ward No 8',
    city: ' Maheshwar',
    state: 'MP',
    zip: 451224,
  },
};
console.log(user?.name);
