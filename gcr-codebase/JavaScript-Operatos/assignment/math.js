// Q3: Math Utility Dashboard
var x = 16.75;

var rounded = Math.round(x);
var root = Math.sqrt(x);
var power = Math.pow(x, 3);
var random = Math.floor(Math.random() * 41) + 10; // 10 to 50

console.log(`--- Math Summary ---
Number        : ${x}
Rounded       : ${rounded}
Square Root   : ${root.toFixed(2)}
Power (x^3)   : ${power.toFixed(2)}
Random (10-50): ${random}`);
