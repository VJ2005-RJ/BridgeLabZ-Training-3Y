let currentSalary = 30000;
let incrementRate = 10;
let salaryReport = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * incrementRate / 100;
    currentSalary = Math.round(currentSalary);

    salaryReport.push({
        Year: year,
        Salary: currentSalary
    });
}

console.table(salaryReport);
