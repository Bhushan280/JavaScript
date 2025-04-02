
# 📌 Event Propagation in JavaScript: Bubbling, Capturing, Trickling

---

## ✅ 1. What is Event Propagation?

When an event occurs on a DOM element (like a `click`), it doesn't just trigger on that element — it travels through the DOM tree in **phases**:

### 📌 Phases of Event Propagation

1. **Capturing Phase** (a.k.a. *Trickling Down*):
   - Event starts from the top (`document`) and moves down to the target.

2. **Target Phase**:
   - Event reaches the actual element interacted with.

3. **Bubbling Phase**:
   - Event bubbles back **upward** from the target to the root.

---

## ✅ 2. Order of Event Handler Execution

| Phase         | Direction        | Listeners Triggered When `useCapture` Is |
|---------------|------------------|------------------------------------------|
| Capturing     | Top → Down       | `true`                                   |
| Target        | -                | both `true` and `false`                  |
| Bubbling      | Bottom → Up      | `false` (default)                        |

---

## ✅ 3. How to Capture Instead of Bubble?

```js
element.addEventListener("click", handler, true); // Capturing
element.addEventListener("click", handler);       // Bubbling (default)
```

---

## ✅ 4. Code Demo: Bubbling, Capturing, Mixed

### 🔸 HTML

```html
<div id="grandparent">
  Grandparent
  <div id="parent">
    Parent
    <div id="child">
      Child
    </div>
  </div>
</div>
```

### 🔸 JavaScript

```js
// All Bubbling
grandparent.addEventListener("click", () => console.log("Grandparent"), false);
parent.addEventListener("click", () => console.log("Parent"), false);
child.addEventListener("click", () => console.log("Child"), false);

// All Capturing
grandparent.addEventListener("click", () => console.log("Grandparent"), true);
parent.addEventListener("click", () => console.log("Parent"), true);
child.addEventListener("click", () => console.log("Child"), true);

// Mixed
grandparent.addEventListener("click", () => console.log("Grandparent (Capture)"), true);
parent.addEventListener("click", () => console.log("Parent (Bubble)"), false);
child.addEventListener("click", () => console.log("Child (Capture)"), true);
```

---

## ✅ 5. Stopping Propagation

### 🔸 stopPropagation()

```js
child.addEventListener("click", (e) => {
  e.stopPropagation(); // Stops bubbling/capturing beyond this point
});
```

### 🔸 stopImmediatePropagation()

```js
child.addEventListener("click", (e) => {
  e.stopImmediatePropagation(); // Stops other handlers on same element too
});
```

---

## ✅ All Scenarios Summary

| Scenario                             | Listeners       | Output                          |
|--------------------------------------|------------------|----------------------------------|
| All Bubbling                         | false, false, false | Child → Parent → Grandparent  |
| All Capturing                        | true, true, true   | Grandparent → Parent → Child   |
| Mixed (true, false, true)            | Capture → Bubble → Capture | Grandparent → Child → Parent  |
| Mixed (true, false, false)           | Capture → Bubble → Bubble  | Grandparent → Child → Parent  |
| stopPropagation in Child (Bubbling)  | Child only        | Child                          |
| stopPropagation in Grandparent (Capture) | Grandparent only  | Grandparent                    |

---

## ✅ Best Practices

- Prefer bubbling for regular UI handlers (`false`)
- Use capturing (`true`) only when intercepting early
- Clean up listeners on unmount (e.g., in React)
- Avoid unnecessary nested listeners for performance

---

## ✅ Interview Recap

> **Q: What is the difference between event bubbling and capturing in JavaScript?**  
> A: Bubbling goes bottom-up (default), capturing goes top-down. Event handlers run in the order based on their registration phase (capturing = true, bubbling = false). We can stop propagation at any point using `stopPropagation()`.

---

## ✅ Bonus: Tools

- 📖 MDN: [Event Bubbling & Capturing](https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase)
- 🧪 Test with DevTools → Use "Event Listeners" tab and click tree to inspect listeners.
