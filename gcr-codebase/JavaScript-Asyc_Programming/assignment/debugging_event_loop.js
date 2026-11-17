// Q9 – Debugging the Event Loop
// Predicted output order before running:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Explanation:
// The first and last synchronous logs execute immediately.
// Promise.then() queues a microtask. setTimeout() queues a timer callback,
// which is a macrotask. Once synchronous code finishes, microtasks are drained
// before the event loop proceeds to the timer callback. A 0 ms timer does not
// mean the callback runs before the current script or before microtasks.
