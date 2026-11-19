"use strict";

function outer() {
    console.log("outer count before assignment:", count); // undefined due to var hoisting
    var count = 5;

    function inner() {
        console.log("inner count before assignment:", count); // undefined: inner has its own local var
        var count = 10;
        console.log("inner count after assignment:", count); // 10
    }

    inner();
    console.log("outer count after inner:", count); // 5
}

outer();

// Arrow version: this arrow has no local `count`, so it reads the outer function's count.
function outerWithArrow() {
    var count = 5;
    const innerArrow = () => {
        console.log("arrow reads outer count:", count);
    };
    innerArrow();
}
outerWithArrow();

// Debug tip: step into outer(), then inner(); inspect separate local scopes in the Call Stack.
