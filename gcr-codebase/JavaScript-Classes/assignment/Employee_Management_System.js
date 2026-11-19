"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 45000),
    new Employee(2, "Sara", "HR", 38000),
    new Employee(3, "Kiran", "Finance", 52000),
    new Employee(4, "Riya", "IT", 48000),
    new Employee(5, "Arjun", "Sales", 41000)
];

employees[0].applyBonus(10);

employees.forEach(employee => {
    console.log(`${employee.name} (${employee.department}) - Annual Salary: ₹${employee.getAnnualSalary().toFixed(2)}`);
});

const totalAnnualPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log(`Total annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);
