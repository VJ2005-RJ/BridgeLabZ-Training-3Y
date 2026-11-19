"use strict";

// Version 1: constructor functions and prototypes.
function Person(name) {
    this.name = name;
}
Person.prototype.printName = function () {
    console.log(`Prototype version - Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.printBranch = function () {
    console.log(`Prototype version - Branch: ${this.branch}`);
};

const prototypeStudent = new Student("Vaibhav", "Computer Science");
prototypeStudent.printName();
prototypeStudent.printBranch();

// Version 2: ES6 classes using extends and super().
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Class version - Name: ${this.name}`);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    printBranch() {
        console.log(`Class version - Branch: ${this.branch}`);
    }
}

const classStudent = new StudentClass("Vaibhav", "Computer Science");
classStudent.printName();
classStudent.printBranch();
