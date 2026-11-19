"use strict";

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidValues = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Empty or whitespace-only strings are treated as invalid numeric input.
    const isWhitespace = typeof value === "string" && value.trim() === "";
    const isValidNumber = !isWhitespace && value !== undefined && !Number.isNaN(numberValue);

    console.log(`Item ${i + 1}: original=${stringValue}, Number=${numberValue}, Boolean=${booleanValue}, String="${stringValue}"`);

    if (isValidNumber) {
        validNumbers.push(numberValue);
    } else {
        invalidValues.push(value);
        console.log(`  INVALID NUMBER: ${stringValue}`);
    }
}

console.log("\nValid numeric data:", validNumbers);
console.log("Invalid values:", invalidValues);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidValues.length);
