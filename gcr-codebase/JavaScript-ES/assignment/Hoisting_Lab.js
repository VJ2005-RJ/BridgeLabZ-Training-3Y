"use strict";

// Original sequence, arranged so the results can be observed.
console.log("score before assignment:", score); // undefined: var is hoisted and initialized to undefined
announce(); // Function declarations are hoisted with their function body.
var score = 50;
function announce() {
    console.log("Game started");
}
let status = "ready";
startGame();

function startGame() {
    console.log("status:", status);
}

// Arrow functions are expressions assigned to variables; they are not callable before initialization.
const announceArrow = () => console.log("Game started with arrow function");
announceArrow();

// Fix: declare variables before using them for clearer, safer code.
const fixedScore = 50;
const fixedStatus = "ready";
console.log("Fixed values:", fixedScore, fixedStatus);

// Note: calling startGame() before `let status = "ready"` would throw ReferenceError
// because `status` is in its temporal dead zone until initialization.
