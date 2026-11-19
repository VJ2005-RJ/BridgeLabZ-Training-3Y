$(document).ready(function () {
    // Show a greeting based on the current time.
    let hour = new Date().getHours();

    if (hour < 12) {
        $("#greeting").text("Good Morning!");
    } else if (hour < 17) {
        $("#greeting").text("Good Afternoon!");
    } else {
        $("#greeting").text("Good Evening!");
    }

    // Change the greeting into a motivational quote.
    $("#changeGreeting").click(function () {
        $("#greeting").text("Keep learning and never give up!");
    });

    // Show or hide the welcome message.
    $("#toggleWelcome").click(function () {
        $("#welcomeMessage").toggle();
    });

    // Display an alert when the greeting is clicked.
    $("#greeting").click(function () {
        alert("Welcome! Have a nice day.");
    });
});
