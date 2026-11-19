// Q4: Array Performance Analyzer
var scores = [];
for (var i = 0; i < 8; i++) {
  scores.push(Math.floor(Math.random() * 71) + 30); // 30 to 100
}

var highest = Math.max(...scores);
var lowest = Math.min(...scores);
var average = scores.reduce(function (sum, s) { return sum + s; }, 0) / scores.length;
var passed = scores.filter(function (s) { return s >= 50; });
var labels = scores.map(function (s) { return s >= 50 ? s + " (Pass)" : s + " (Fail)"; });

console.log("Scores   :", labels.join(", "));
console.log("Highest  :", highest);
console.log("Lowest   :", lowest);
console.log("Average  :", average.toFixed(2));
console.log("Passed   :", passed.length, "of", scores.length);
