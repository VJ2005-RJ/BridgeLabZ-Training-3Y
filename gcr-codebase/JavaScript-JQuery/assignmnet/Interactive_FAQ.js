$(document).ready(function () {
    // Click a question to open or close its answer.
    $(".question").click(function () {
        $(this).next(".answer").toggle();
    });

    // Change question color while the mouse is over it.
    $(".question").hover(
        function () { $(this).css("color", "blue"); },
        function () { $(this).css("color", "black"); }
    );

    // Double-click any question to close all answers.
    $(".question").dblclick(function () {
        $(".answer").hide();
    });

    // Highlight the question when its answer input gets focus.
    $(".answer input").focus(function () {
        $(this).closest(".faq").find(".question").css("background", "#fff0a8");
    });

    // Reset the question background when the input loses focus.
    $(".answer input").blur(function () {
        $(this).closest(".faq").find(".question").css("background", "");
    });
});
