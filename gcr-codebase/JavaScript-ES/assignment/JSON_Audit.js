"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18Users = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const item = JSON.parse(rawData[i]);

        if (item.user === undefined || item.age === undefined) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(item.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number");
        }

        const cleanItem = { ...item, age };
        cleanData.push(cleanItem);

        if (age < 18) {
            under18Users.push(cleanItem);
        }
    } catch (error) {
        errors.push({ line: i + 1, message: error.message });
        console.log(`Line ${i + 1} error: ${error.message}`);
    }
}

console.log("\nClean data:", cleanData);
console.log("Errors:", errors);
console.log("Under-18 users:", under18Users);

// Debug tip: place a breakpoint inside catch to see how parsing errors skip to error handling.
