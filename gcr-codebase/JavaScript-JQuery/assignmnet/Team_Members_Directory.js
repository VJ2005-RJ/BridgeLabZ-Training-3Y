$(document).ready(function () {
    // Click a manager to highlight the employees who report to them.
    $(".manager").click(function () {
        $(this).siblings(".employee").toggleClass("highlight");
    });

    // Show contact information next to an employee.
    $(".employee").hover(
        function () { $(this).find(".contact").show(); },
        function () { $(this).find(".contact").hide(); }
    );

    // Click a department heading to change the background of its team members.
    $(".deptName").click(function () {
        $(this).parent().children(".team").children(".member")
            .css("background", "#d9edff");
    });

    // Pick one random employee and highlight their sibling employees.
    $("#random").click(function () {
        let employees = $(".employee");
        let number = Math.floor(Math.random() * employees.length);
        employees.removeClass("highlight");
        employees.eq(number).siblings(".employee").addClass("highlight");
        employees.eq(number).addClass("highlight");
    });

    // Use parent() and find() to collapse or expand a team's members.
    $(".collapse").click(function () {
        $(this).parent().find(".team").toggle();
    });
});
