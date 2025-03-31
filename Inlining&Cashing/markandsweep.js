let obj1 = { name: "Object 1" };
let obj2 = { name: "Object 2" };
let obj3 = { name: "Object 3" };

obj1.reference = obj2;
obj2.reference = obj1;

// obj3 is not referenced by any other object, so it's eligible for garbage collection

// Simulate garbage collection (in reality, this is handled by the JavaScript engine)
function garbageCollect() {
  // Mark phase: Mark reachable objects
  let reachableObjects = new Set();
  function mark(obj) {
    if (obj && !reachableObjects.has(obj)) {
      reachableObjects.add(obj);
      for (let key in obj) {
        if (typeof obj[key] === 'object') {
          mark(obj[key]);
        }
      }
    }
  }
  mark(window); // Start marking from the global object

  // Sweep phase: Reclaim unmarked objects
  // In a real implementation, this would involve freeing the memory
  // Here, we simulate it by logging the garbage collected objects
  if (obj1 && !reachableObjects.has(obj1)) {
    console.log("Garbage collected:", obj1);
    obj1 = null;
  }
    if (obj2 && !reachableObjects.has(obj2)) {
    console.log("Garbage collected:", obj2);
    obj2 = null;
  }
  if (obj3 && !reachableObjects.has(obj3)) {
    console.log("Garbage collected:", obj3);
    obj3 = null;
  }
}

garbageCollect();
// Expected output: "Garbage collected: { name: 'Object 3' }"