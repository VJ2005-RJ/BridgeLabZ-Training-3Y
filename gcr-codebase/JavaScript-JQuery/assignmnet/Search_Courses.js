$(document).ready(function () {
    // Filter the course list whenever a key is released.
    $("#search").keyup(function () {
        let searchText = $(this).val().toLowerCase();
        let matched = 0;

        $("#courseList li").each(function () {
            let course = $(this).text();
            let found = course.toLowerCase().includes(searchText);

            $(this).toggle(found);
            $(this).removeClass("match");

            if (found && searchText !== "") {
                $(this).addClass("match").css("font-weight", "bold");
            } else {
                $(this).css("font-weight", "normal");
            }

            if (found) matched++;
        });

        $("#count").text("Matched courses: " + matched);
    });

    // Clear the search and show all courses again.
    $("#clear").click(function () {
        $("#search").val("");
        $("#courseList li").show().removeClass("match")
            .css("font-weight", "normal");
        $("#count").text("Showing 5 courses");
    });
});
