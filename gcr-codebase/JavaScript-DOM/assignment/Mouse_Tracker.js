// Q7: Detect Mouse Path and Coordinates Logger

const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", function (event) {
    // clientX and clientY are browser-window coordinates.
    coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", function (event) {
    const boxPosition = trackingBox.getBoundingClientRect();

    // Convert window coordinates into positions inside the tracking box.
    const dot = document.createElement("span");
    dot.style.position = "absolute";
    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = "red";
    dot.style.left = `${event.clientX - boxPosition.left - 5}px`;
    dot.style.top = `${event.clientY - boxPosition.top - 5}px`;

    trackingBox.appendChild(dot);
});
