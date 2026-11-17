// Q10 – The Final Delivery: Async Pipeline Debugger
// Each stage waits 1–2 seconds and may randomly fail.
// await pauses this async function until the current stage Promise settles.
// If a stage rejects, control jumps to the catch block and later stages stop.

function runDeliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.floor(Math.random() * 1000);

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(stepName + " failed"));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await runDeliveryStep("takeOrder", "Step 1: Order taken");
        await runDeliveryStep("prepare", "Step 2: Food prepared");
        await runDeliveryStep("pack", "Step 3: Package ready");
        await runDeliveryStep("dispatch", "Step 4: Out for delivery");
        await runDeliveryStep("deliver", "Delivery completed!");
    } catch (error) {
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();

// Event-loop note:
// The Promise executor runs immediately, but setTimeout schedules its callback
// for a later event-loop turn. Resolving/rejecting a Promise schedules async
// continuation work as a microtask. await ensures these delivery stages happen
// sequentially, while the JavaScript thread can handle other work during delays.
