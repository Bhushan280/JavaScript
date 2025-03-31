let user = { name: "Alice" };
let dog = { name: "Buddy" };

console.log(user.name);
console.log(dog.name);




function greet(person) {
  return "Hello, " + person.name;
}

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

console.log(greet(user1));  // Cache created
console.log(greet(user2));  // Cache reused



// Shapes (Hidden Classes)
// Inline caching works best when objects have the same shape. That means:

// Same properties

// Added in the same order

let a = { x: 1, y: 2 };
let b = { x: 3, y: 4 };  // Same shape ➜ cache reused

let c = { y: 2, x: 1 };  // Different shape ➜ separate cache

console.log(a)
console.log(b)
console.log(c)

//------->

//✅ Good:

function User(name, age) {
  this.name = name;
  this.age = age;
}

//❌ Bad:

let users = {};
user.name = "Alice";
user.age = 25;
delete users.age;  // Breaks shape