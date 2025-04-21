/*
const findMatchingElement = (container1, container2, targetElement) => {
    // Check if the target element is within container1
    if (!container1.contains(targetElement)) {
        return null;
    }

    // Build the path from container1 to the target element
    const path = [];
    let currentElement = targetElement;

    while (currentElement !== container1) {
        const parent = currentElement.parentElement;
        if (!parent) {
            return null; // Orphaned element or not within container1
        }

        const children = Array.from(parent.children);
        const index = children.indexOf(currentElement);
        if (index === -1) {
            return null; // Should not happen if contains() is true
        }

        path.unshift(index);
        currentElement = parent;
    }

    // Traverse container2 using the path
    let current = container2;
    for (const index of path) {
        const children = current.children;
        if (index >= children.length) {
            return null;
        }
        current = children[index];
        if (!current) {
            return null;
        }
    }

    return current;
};
*/
const findMatchingElement = (container1, container2, targetElement) => {
    // If container1 is the target, return the corresponding container2 node
    if (container1 === targetElement) return container2;

    const children1 = Array.from(container1.children);
    const children2 = Array.from(container2.children);

    for (let i = 0; i < children1.length; i++) {
        if (children1[i] && children2[i]) {
            const result = findMatchingElement(children1[i], children2[i], targetElement);
            if (result) return result;
        }
    }

    // If no match found
    return null;
};


    // When target element exists in container1
    const positiveResult = findMatchingElement(
      document.getElementById("container1"),
      document.getElementById("container2"),
      document.getElementById("span-id")
    );
    console.log("Positive Result:", positiveResult ? positiveResult.textContent : null); // Output: Test2

    // When target element does not have a counterpart in container2
    const negativeResult = findMatchingElement(
      document.getElementById("container1"),
      document.getElementById("container2"),
      document.getElementById("span-id-2")
    );
    console.log("Negative Result:", negativeResult); // Output: null