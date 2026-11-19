"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            const error = new Error("Transaction entry is null");
            error.name = "NullEntryError";
            throw error;
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            const error = new Error("Transaction is missing id or amount");
            error.name = "MissingPropertyError";
            throw error;
        }
        if (transaction.amount < 0) {
            const error = new Error("Transaction amount cannot be negative");
            error.name = "NegativeAmountError";
            throw error;
        }

        valid.push(transaction);
        console.log(`VALID: Transaction ${transaction.id}, amount = ${transaction.amount}`);
    } catch (error) {
        invalid.push({ transaction, type: error.name, message: error.message });
        console.log(`INVALID: ${error.name} - ${error.message}`);
    }
}

console.log("\nValid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Successful: ${valid.length}, Failed: ${invalid.length}`);

// Debug tip: set a breakpoint inside the loop and inspect transaction, valid, and invalid.
