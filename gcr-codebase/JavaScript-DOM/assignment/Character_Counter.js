// Q2: Live Character Counter with warning colours

const messageBox = document.getElementById("messageBox");
const characterCount = document.getElementById("characterCount");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
    const remainingCharacters = maximumCharacters - messageBox.value.length;
    characterCount.textContent = `${remainingCharacters} characters remaining`;

    if (remainingCharacters === 0) {
        characterCount.style.color = "red";
    } else if (remainingCharacters <= 20) {
        characterCount.style.color = "orange";
    } else {
        characterCount.style.color = "green";
    }
}

messageBox.addEventListener("input", updateCounter);

// The maxlength attribute is an extra safeguard. This listener demonstrates
// preventDefault() when the user tries to type beyond the allowed length.
messageBox.addEventListener("beforeinput", function (event) {
    const isAddingText = event.inputType.startsWith("insert");
    if (isAddingText && messageBox.value.length >= maximumCharacters) {
        event.preventDefault();
    }
});

resetButton.addEventListener("click", function () {
    messageBox.value = "";
    updateCounter();
    messageBox.focus();
});

updateCounter();
