/**
 * How would you implement a function to execute an array of asynchronous tasks
 * sequentially, collecting both resolved values and errors?
 * 
 * @param {Array<Function>} tasks - An array of async functions.
 * @returns {Promise<Array>} - Resolves to an array of results/errors.
*/
// const randomVal = Math.floor(Math.random() * 10)
// console.log(randomVal)
// Example usage:;
const task = [
    () => new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
    () => new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    () => new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error')), 1500)),
    () => new Promise((resolve) => setTimeout(() => resolve(3), 500)),
];

const asyncTaskSequentially = async (tasks) => {
    const results = [];
    for (const task of tasks) {
        try {
            const res = await task();
            results.push(res);
        } catch (error) {
            results.push(error);
        }
    }
    return results;
}

asyncTaskSequentially(task)
    .then((results) => {
        console.log("Final results:", results); 
    })
    .catch(console.error);