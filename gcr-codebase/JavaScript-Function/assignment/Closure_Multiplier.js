"use strict";

function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log("Triple of 5:", triple(5));
console.log("Double of 5:", double(5));

// Closure: the returned function remembers the multiplier variable
// from the outer makeMultiplier() call, even after that call has finished.
