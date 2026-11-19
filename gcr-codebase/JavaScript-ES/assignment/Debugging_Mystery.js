"use strict";

function showMessage() {
    // Strict mode does not allow assignment to an undeclared variable.
    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();

// Debug tip: set a breakpoint on the console.log line, add greeting to Watch,
// and inspect the Call Stack panel to see showMessage() and the global context.
