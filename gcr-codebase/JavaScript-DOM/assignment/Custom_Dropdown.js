// Q8: Custom Dropdown without using the select tag

const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const selectedOption = document.getElementById("selectedOption");

dropdownButton.addEventListener("click", function () {
    dropdownOptions.classList.toggle("hidden");
});

dropdownOptions.addEventListener("click", function (event) {
    const optionButton = event.target.closest(".dropdown-option");
    if (!optionButton) return;

    const chosenValue = optionButton.dataset.value;
    dropdownButton.textContent = `${chosenValue} ▼`;
    selectedOption.textContent = `Selected subject: ${chosenValue}`;
    dropdownOptions.classList.add("hidden");
});

// The capturing phase runs before the click reaches the target element.
// This lets us close the menu when a click happens anywhere outside it.
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        dropdownOptions.classList.add("hidden");
    }
}, true);
