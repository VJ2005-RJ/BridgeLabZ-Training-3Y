$(document).ready(function () {
    // These emails are treated as already registered.
    let registeredEmails = ["test@example.com", "admin@example.com"];

    $("#registerForm").submit(function (event) {
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();
        let valid = true;

        // Reset borders before checking the fields.
        $("input").css("border", "1px solid #777");

        if (name === "") {
            $("#name").css("border", "2px solid red");
            valid = false;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email) || registeredEmails.includes(email)) {
            $("#email").css("border", "2px solid red");
            valid = false;
        }

        if (password.length < 8) {
            $("#password").css("border", "2px solid red");
            valid = false;
        }

        if (valid) {
            $("#message").css("color", "green").text("Registration successful!");
            registeredEmails.push(email);
            $("#registerForm")[0].reset();
        } else {
            $("#message").css("color", "red")
                .text("Please correct the fields marked in red.");
        }
    });
});
