// Q5 – Frontend Rush: Avoiding Callback Hell
// Part A: nested callbacks demonstrate callback hell.

function designCallback(next) {
    setTimeout(() => {
        console.log("design completed");
        next();
    }, 1000);
}
function buildCallback(next) {
    setTimeout(() => {
        console.log("build completed");
        next();
    }, 1000);
}
function testCallback(next) {
    setTimeout(() => {
        console.log("test completed");
        next();
    }, 1000);
}
function deployCallback(next) {
    setTimeout(() => {
        console.log("deploy completed");
        next();
    }, 1000);
}
function celebrateCallback(next) {
    setTimeout(() => {
        console.log("celebrate!");
        if (next) next();
    }, 1000);
}

console.log("Callback version started");
designCallback(() => {
    buildCallback(() => {
        testCallback(() => {
            deployCallback(() => {
                celebrateCallback(() => console.log("Callback pipeline finished."));
            });
        });
    });
});

// Part B: the same pipeline with async/await.
function runStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    console.log("Async/await version started");
    await runStage("design completed");
    await runStage("build completed");
    await runStage("test completed");
    await runStage("deploy completed");
    await runStage("celebrate!");
    console.log("Async/await pipeline finished.");
}

runWithAsyncAwait();

// Explanation:
// async/await lets sequential asynchronous steps look like ordinary top-to-bottom
// code. It reduces nested indentation and makes try/catch error handling clearer.
// The callback and async/await demonstrations run independently in this example.
