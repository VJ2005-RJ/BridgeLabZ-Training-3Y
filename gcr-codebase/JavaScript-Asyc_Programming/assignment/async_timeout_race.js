// Q4 – DevOps Delay: Async Timeout Race
// Server A takes 2 seconds; Server B takes 3 seconds.
// Each server can randomly fail. Promise.all() waits for both; Promise.race()
// settles as soon as the first server Promise settles.

function contactServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(serverName + " failed to respond."));
            } else {
                resolve(serverName + " responded successfully");
            }
        }, delay);
    });
}

const serverA = contactServer("Server A", 2000);
const serverB = contactServer("Server B", 3000);

// Promise.all succeeds only if both server Promises succeed.
Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.error("Deployment incomplete:", error.message));

// Promise.race settles with the first Promise to resolve OR reject.
Promise.race([serverA, serverB])
    .then(response => console.log("Fastest response:", response))
    .catch(error => console.error("Fastest response failed:", error.message));
