// Q8 – Order Processing Flow: Async Retry Mechanism
// submitOrder() fails approximately 50% of the time.

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject(new Error("Order submission failed"));
            } else {
                resolve("Order submitted successfully");
            }
        }, 500);
    });
}

async function processOrder() {
    let lastError;

    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            console.log(result);
            return;
        } catch (error) {
            lastError = error;
            console.log(`Attempt ${attempt}: Failed`);
        }
    }

    // Throw the required final error after all three attempts fail.
    throw new Error("Order could not be processed", { cause: lastError });
}

processOrder().catch(error => {
    console.error(error.message);
});
