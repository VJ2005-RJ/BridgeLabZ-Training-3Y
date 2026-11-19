"use strict";

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubled = applyOperation(numbers, number => number * 2);
const squared = applyOperation(numbers, number => number * number);

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);
console.log("Squared numbers:", squared);
