let name = {
  firstName: "Bhushan",
  lastName: "Chouhan"
};

let printFullName = function (hometown, job) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + " working as " + job);
};

// Native .bind()
let print1 = printFullName.bind(name, "Indore");
print1("SDE");

// Custom .mybind()
Function.prototype.mybind = function (...args1) {
  let obj = this;
  let context = args1[0];           // the object to bind (e.g., 'name')
  let params = args1.slice(1);      // arguments like 'Indore'

  return function (...args2) {      // arguments passed when calling the bound function
    obj.call(context, ...params, ...args2);
  };
};

// Function.prototype.mybind = function(...args) {
//     let obj = this;
//     return function (...args2){
//         obj.call(...args, args2);
//     }
// }

// let printName2 = fullName.mybind(name, 'Dehradun')
// printName2('Uttarakhand');

let print2 = printFullName.mybind(name, "Indore");
print2("SDE");
