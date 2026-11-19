// Q9: Odd-Even Number Analyzer
var numbers = [];
for (var i = 1; i <= 30; i++) {
  numbers.push(i);
}

var results = [];
for (var j = 0; j < numbers.length; j++) {
  var n = numbers[j];
  if (n % 3 === 0 && n % 5 === 0) {
    results.push("FizzBuzz");
  } else if (n % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

console.log(results);
