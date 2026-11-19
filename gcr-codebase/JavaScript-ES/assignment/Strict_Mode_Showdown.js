"use strict";

// Duplicate parameter names are a SyntaxError in strict mode.
// Assignment to an undeclared variable and deleting an unqualified identifier are also illegal.
// eval is used here so each example's error can be caught without stopping this file.

function testCode(label, code) {
    try {
        eval(code);
        console.log(`${label}: completed without error`);
    } catch (error) {
        console.log(`${label}: ${error.name} - ${error.message}`);
    }
}

testCode("Duplicate parameters in strict mode", '"use strict"; function demo(a, a) { return a; } demo(5, 10);');
testCode("Undeclared assignment in strict mode", '"use strict"; total = 10;');
testCode("Delete identifier in strict mode", '"use strict"; let total = 10; delete total;');

// Correct ES6 version: use unique parameters and declared variables.
function demo(first, second) {
    const total = first + second;
    return total;
}
console.log("Correct ES6 version:", demo(5, 10));

// To compare non-strict behavior, run a separate non-strict script without the strict directive.
// Some operations may behave differently, but duplicate parameter names are still discouraged.
