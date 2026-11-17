// Q7 – The Lazy Loader: Promise Combinator Practice
// allSettled() reports the outcome of every Promise, even if one rejects.

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25
                ? reject(new Error("Profile failed to load"))
                : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25
                ? reject(new Error("Posts failed to load"))
                : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.25
                ? reject(new Error("Messages failed to load"))
                : resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadDashboardModules() {
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach((result, index) => {
        const moduleNames = ["Profile", "Posts", "Messages"];
        if (result.status === "fulfilled") {
            console.log(moduleNames[index] + " succeeded:", result.value);
        } else {
            console.error(moduleNames[index] + " failed:", result.reason.message);
        }
    });

    console.log("Total time taken:", Date.now() - startTime, "ms");
}

loadDashboardModules();
