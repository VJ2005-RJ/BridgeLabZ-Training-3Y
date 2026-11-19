class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }

        this.#balance += amount;
        console.log("Deposited Rs.", amount);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
        console.log("Withdrawn Rs.", amount);
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(5000);

account.deposit(1500);
console.log("Balance:", account.getBalance());

try {
    account.withdraw(8000);
} catch (error) {
    console.log("Transaction failed:", error.message);
}

console.log("Final balance:", account.getBalance());
