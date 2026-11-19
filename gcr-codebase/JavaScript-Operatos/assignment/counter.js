// Q6: Event-Based Counter Simulation
var count = 0;

function increment() {
  count++;
  logCount("Increment");

  // nested function: can access count from the outer scope
  function logCount(action) {
    console.log(action + " -> count =", count);
  }
}

function decrement() {
  count--;
  console.log("Decrement -> count =", count);
}

// simulate clicks
increment();
increment();
increment();
decrement();
decrement();
