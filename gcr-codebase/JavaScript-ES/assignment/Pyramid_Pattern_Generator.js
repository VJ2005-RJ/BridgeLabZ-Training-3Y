"use strict";

const input = Number(process.argv[2]);
const rows = Number.isInteger(input) && input > 0 ? input : 5;

for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line.trimEnd());
}

// Try replacing `let i` and `let j` with `var` and inspect their function/global scope.
// `var` is not block-scoped, while `let` is block-scoped. The pattern output remains the same.
// Debug tip: set breakpoints on both loops and watch i, j, and line.
