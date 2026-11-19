class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name, "is doing general work in", this.department);
    }
}

class Manager extends Employee {
    work() {
        console.log(this.name, "is managing the", this.department, "team");
    }
}

let emp = new Employee("Aman", "IT");
let manager = new Manager("Neha", "Sales");

emp.work();
manager.work();
