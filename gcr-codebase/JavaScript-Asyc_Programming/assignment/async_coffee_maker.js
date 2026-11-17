// Q1 – The Startup Morning: Async Coffee Maker
// Each step returns a Promise that resolves after 1–2 seconds.
// A random failure is simulated so the catch() handler can be tested.

function randomDelay() {
    return 1000 + Math.floor(Math.random() * 1000);
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error("Water could not be boiled."));
            } else {
                console.log("Step 1: Water boiled.");
                resolve("Hot water");
            }
        }, randomDelay());
    });
}

function brewCoffee(water) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error("Coffee brewing failed."));
            } else {
                console.log("Step 2: Coffee brewed using " + water + ".");
                resolve("Fresh coffee");
            }
        }, randomDelay());
    });
}

function pourCoffee(coffee) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error("Could not pour the coffee."));
            } else {
                console.log("Step 3: " + coffee + " poured into a cup.");
                resolve();
            }
        }, randomDelay());
    });
}

boilWater()
    .then(water => brewCoffee(water))
    .then(coffee => pourCoffee(coffee))
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Coffee process failed:", error.message));
