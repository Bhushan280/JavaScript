✅ 1. What is Event Propagation?
When an event occurs on a DOM element (like a click), it doesn't just trigger on that element — it travels through the DOM tree in phases:

📌 Phases of Event Propagation
Capturing Phase (a.k.a. Trickling Down):

Event starts from the top (root of DOM: document) and moves down toward the target element.

Target Phase:

Event reaches the actual element that was interacted with (e.g., a button).

Bubbling Phase:

Event moves back upward from the target to the root, notifying ancestors in reverse order.

✅ 2. Order of Event Handler Execution
Phase	Order (DOM Tree)	Listeners Triggered When useCapture Is
Capturing	document → html → ... → target	true
Target	target element	both true and false listeners
Bubbling	target → parent → ... → document	false
✅ 3. How to Capture Instead of Bubble?
Pass true as the third argument to addEventListener():

js
Copy
Edit
element.addEventListener("click", handler, true); // Capturing mode
Use false (or omit it) for bubbling mode:

js
Copy
Edit
element.addEventListener("click", handler); // Bubbling mode (default)
✅ 4. Code Demo: Bubbling, Capturing, Mixed Scenarios
✅ HTML Setup
html
Copy
Edit
<div id="grandparent">
    Grandparent
    <div id="parent">
        Parent
        <div id="child">
            Child
        </div>
    </div>
</div>
✅ JavaScript: Default Bubbling
js
Copy
Edit
grandparent.addEventListener('click', () => {
    console.log("Grandparent Clicked");
}, false); // bubbling

parent.addEventListener('click', () => {
    console.log("Parent Clicked");
}, false); // bubbling

child.addEventListener('click', () => {
    console.log("Child Clicked");
}, false); // bubbling

// Click on #child → Output:
// Child Clicked → Parent Clicked → Grandparent Clicked
✅ Capturing (Trickling Down)
js
Copy
Edit
grandparent.addEventListener('click', () => {
    console.log("Grandparent Capturing");
}, true); // capturing

parent.addEventListener('click', () => {
    console.log("Parent Capturing");
}, true); // capturing

child.addEventListener('click', () => {
    console.log("Child Capturing");
}, true); // capturing

// Click on #child → Output:
// Grandparent Capturing → Parent Capturing → Child Capturing
✅ Mixed Scenario: Capturing + Bubbling
js
Copy
Edit
grandparent.addEventListener('click', () => {
    console.log("Grandparent (Capturing)");
}, true);

parent.addEventListener('click', () => {
    console.log("Parent (Bubbling)");
}, false);

child.addEventListener('click', () => {
    console.log("Child (Capturing)");
}, true);

// Click on #child → Output:
// Grandparent (Capturing) → Child (Capturing) → Parent (Bubbling)
✅ 5. How to Stop Event Propagation?
🔒 e.stopPropagation()
Prevents event from continuing further (does not stop handlers on the same element).

js
Copy
Edit
child.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Child Clicked and Propagation Stopped");
});
🛑 e.stopImmediatePropagation()
Stops other handlers on same element and stops bubbling/capturing.

js
Copy
Edit
child.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    console.log("Only this will log");
});
child.addEventListener('click', () => {
    console.log("This won't log");
});
✅ Interview-Centric Summary Table
Term	Phase	Direction	When Listener Fires	Example Flag
Capturing	Phase 1	Top → Down	true in addEventListener	true
Bubbling	Phase 3	Bottom → Up	false (default)	false or omit
Target Phase	Phase 2	-	Both true and false	N/A
stopPropagation()	Any Phase	Halts propagation	Prevents event from moving	e.stopPropagation()
stopImmediatePropagation()	Any Phase	Halts everything	Stops all listeners on current element	e.stopImmediatePropagation()
✅ All Important Scenarios & Their Outputs
Scenario	Code (Grand → Parent → Child)	Output Order
All Bubbling	false, false, false	Child → Parent → Grandparent
All Capturing	true, true, true	Grandparent → Parent → Child
Mixed: true, false, true	Capturing → Bubbling → Capturing	Grandparent → Child → Parent
Mixed: true, false, false	Capturing → Bubbling → Bubbling	Grandparent → Child → Parent
Bubbling with stopPropagation() on Child	false, false, false + stop in child	Child
Capturing with stopPropagation() on Grand	true, true, true + stop in grand	Grandparent
✅ Best Practices
Prefer bubbling (false) for most UI handlers.

Use capturing (true) only when you need to intercept early (e.g., global monitoring, canceling).

Always clean up event listeners in components (e.g., React unmount).

Avoid using event delegation with stopPropagation() unless absolutely needed.