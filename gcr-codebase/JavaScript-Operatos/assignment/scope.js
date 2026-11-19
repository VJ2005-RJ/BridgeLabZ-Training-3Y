// Q1: Scope Conflict Resolver
var bonus = 5000; // global variable

function calculateSalary(isPermanent) {
  var salary = 40000; // local variable
  var total = salary;

  // add bonus only for permanent employees
  if (isPermanent === true) {
    total = salary + bonus;
  }
  console.log("isPermanent:", isPermanent, "| Total salary:", total);
}

calculateSalary(true);  // 45000
calculateSalary(false); // 40000

// global bonus is unchanged by isPermanent; local salary is not accessible outside
console.log("Global bonus after calls:", bonus);
console.log("Is salary visible outside?", typeof salary); // undefined
