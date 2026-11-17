// Q2 – Task Scheduler: Micro vs Macro Challenge
console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Explanation:
// Synchronous statements run first, in source order.
// After the current call stack is empty, JavaScript drains the microtask queue.
// Promise.then() callbacks are microtasks, so they run before timer callbacks.
// setTimeout() callbacks are macrotasks and run in a later event-loop turn.
//
// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
