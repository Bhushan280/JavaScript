const p = new Promise((resolve, reject) => {
    resolve("promise resolved");
})
console.log(p);
async function getData() {
    return p;
}
const pp = new Promise((resolve, reject) => {
  reject(new Error('Error'));
})

const dataPromise = getData();

dataPromise.then((res) => console.log(res));


const p1 = Promise.resolve('🍎');
const p2 = Promise.resolve('🍌');
const p3 = Promise.reject('💥');

// -----:::::::------- Promise.all() --->
// Promise.all() will wait for all promises to resolve or for one to reject
// If one promise rejects, the entire Promise.all() will reject
// In this case, p3 will cause the entire Promise.all() to reject
// If all promises resolve, it will return an array of resolved values
// If one promise rejects, it will return the error

// Returns when ALL promises resolve
// Fails immediately if ANY promise rejects
// Memory Hack: "ALL or NOTHING"

Promise.all([p1, p2, p3])
  .then(fruits => console.log(fruits))
    .catch(err => console.log(err)); // Output: 💥 (Immediate failure)
  

//-----:::::::------- Promise.allSettled() --->
// Promise.allSettled() will wait for all promises to settle (either resolve or reject)
// It returns an array of objects describing the outcome of each promise
// Each object has a status property (either "fulfilled" or "rejected")
// Returns when ALL promises settle (either resolve or reject)

// Waits for ALL to settle (resolve/reject)
// Returns outcomes with status & value/reason
// Memory Hack: "NO ONE LEFT BEHIND"
 Promise.allSettled([p1, p2, p3])
  .then(results => results.forEach(result => console.log(result.status)));
// Output: "fulfilled", "fulfilled", "rejected"


// -----:::::::------- Promise.race() --->

// Returns the FIRST settled promise (could be success or failure)
// Memory Hack: "FASTEST FINGER FIRST"

const fast = new Promise((res) => setTimeout(() => res('🐇'), 100));
const slow = new Promise((res) => setTimeout(() => res('🐢'), 500));

Promise.race([fast, slow]).then(winner => console.log(winner)); // 🐇


// -----:::::::------- Promise.any() --->
// Promise.any() will wait for the first promise to resolve
// If all promises reject, it will return an AggregateError
// Returns when ANY promise resolves
// Fails if ALL promises reject

// Returns the FIRST RESOLVED promise
// Only rejects if ALL promises reject
// Memory Hack: "YES TO THE FIRST YES"

const failFast = Promise.reject('❌');
const delayedSuccess = new Promise(res => setTimeout(() => res('✅'), 1000));

Promise.any([failFast, delayedSuccess])
  .then(res => console.log(res)); // ✅ after 1 second