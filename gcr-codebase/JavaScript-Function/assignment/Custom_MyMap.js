"use strict";

Array.prototype.myMap = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError("myMap expects a function");
    }

    const result = [];
    for (let index = 0; index < this.length; index++) {
        if (Object.prototype.hasOwnProperty.call(this, index)) {
            result.push(callback(this[index], index, this));
        }
    }
    return result;
};

console.log([1, 2, 3].myMap(number => number * 2));
console.log(["a", "b", "c"].myMap((value, index) => `${index}: ${value}`));
