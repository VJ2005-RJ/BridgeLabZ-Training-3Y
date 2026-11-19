$(document).ready(function () {
    // Attach click events to the current and future remove buttons.
    $("#topics").on("click", ".remove", function () {
        $(this).parent().remove();
        $("#message").text("Subscription topic removed.");
    });

    $("#subscribe").click(function () {
        $("#status").text("Notifications are on.");
        $("#message").text("Successfully subscribed!");
    });

    $("#unsubscribe").click(function () {
        $("#status").text("Notifications are off.");
        $("#message").text("You have unsubscribed.");
    });

    // Add a new topic and attach its remove event using on().
    $("#addTopic").click(function () {
        let topic = $("#newTopic").val().trim();

        if (topic !== "") {
            $("#topics").append('<li>' + $("<div>").text(topic).html() +
                ' <button class="remove">Remove</button></li>');
            $("#newTopic").val("");
            $("#message").text("New topic added.");
        }
    });

    // Demonstrate off() by detaching the remove click event.
    $("#unsubscribe").dblclick(function () {
        $("#topics").off("click", ".remove");
        $("#message").text("Remove button events are now detached.");
    });
});
