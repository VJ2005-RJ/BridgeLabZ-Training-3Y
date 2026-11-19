// Q9: Form Submit Blocker with Live Errors

const registrationForm = document.getElementById("registrationForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const successMessage = document.getElementById("successMessage");

function validateName() {
    const isValid = nameInput.value.trim() !== "";
    document.getElementById("nameError").textContent =
        isValid ? "" : "Please enter your name.";
    return isValid;
}

function validateEmail() {
    const email = emailInput.value.trim();
    const isValid = email !== "" && email.includes("@");
    document.getElementById("emailError").textContent =
        isValid ? "" : "Please enter a valid email containing @.";
    return isValid;
}

function validatePassword() {
    const isValid = passwordInput.value.length >= 6;
    document.getElementById("passwordError").textContent =
        isValid ? "" : "Password must be at least 6 characters.";
    return isValid;
}

// Recheck each field as the user corrects it.
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameIsValid = validateName();
    const emailIsValid = validateEmail();
    const passwordIsValid = validatePassword();

    if (nameIsValid && emailIsValid && passwordIsValid) {
        successMessage.textContent = "Form Submitted Successfully";
        registrationForm.reset();

        // Clear errors after a successful submission.
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("passwordError").textContent = "";
    } else {
        successMessage.textContent = "";
    }
});
