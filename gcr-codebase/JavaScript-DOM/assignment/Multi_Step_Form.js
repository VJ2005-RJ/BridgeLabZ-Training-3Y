// Q3: Multi-Step Form with simple validation

const steps = document.querySelectorAll(".form-step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const formError = document.getElementById("formError");
const summary = document.getElementById("summary");
const summaryText = document.getElementById("summaryText");

let currentStep = 0;

function showStep() {
    steps.forEach((step, index) => {
        step.classList.toggle("hidden", index !== currentStep);
    });

    backButton.disabled = currentStep === 0;
    nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
    formError.textContent = "";
}

function isCurrentStepValid() {
    if (currentStep === 0) {
        return document.getElementById("fullName").value.trim().length > 0;
    }

    if (currentStep === 1) {
        const email = document.getElementById("emailAddress").value.trim();
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    return document.getElementById("userPassword").value.length >= 6;
}

nextButton.addEventListener("click", function () {
    if (!isCurrentStepValid()) {
        const messages = [
            "Please enter your name.",
            "Please enter a valid email address.",
            "Password must contain at least 6 characters."
        ];
        formError.textContent = messages[currentStep];
        return;
    }

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    } else {
        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("emailAddress").value.trim();

        document.getElementById("multiStepForm").classList.add("hidden");
        summary.classList.remove("hidden");
        // Do not display the password in the summary for privacy.
        summaryText.textContent = `Name: ${name} | Email: ${email}`;
    }
});

backButton.addEventListener("click", function () {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

showStep();
