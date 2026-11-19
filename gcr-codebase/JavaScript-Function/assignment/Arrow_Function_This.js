"use strict";

const user = {
    name: "Vaibhav",
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName();

// Arrow functions do not have their own `this`; they inherit it lexically.
// In a typical Node.js top-level context, this.name is undefined.

const correctedUser = {
    name: "Vaibhav",
    showName: function () {
        console.log("Normal function this.name:", this.name);
    }
};

correctedUser.showName();
