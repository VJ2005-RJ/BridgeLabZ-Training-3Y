// jq1 is used for the carousel and active widget.
jq1(document).ready(function () {
    let slides = ["Slide 1", "Slide 2", "Slide 3"];
    let current = 0;

    setInterval(function () {
        current = (current + 1) % slides.length;
        jq1("#carousel").text(slides[current]);
    }, 2000);

    jq1(".widget").click(function () {
        jq1(".widget").removeClass("active");
        jq1(this).addClass("active");
    });
});

// jq2 is used for the notification modal and hover tooltips.
jq2(document).ready(function () {
    jq2("#notify").click(function () {
        jq2("#modal").fadeIn();
    });

    jq2("#close").click(function () {
        jq2("#modal").fadeOut();
    });

    jq2(".widget").hover(
        function () {
            let info = jq2(this).attr("title");
            if (info) {
                jq2(this).attr("data-old-title", info);
                jq2(this).removeAttr("title").append('<p class="tip">' + info + '</p>');
            }
        },
        function () {
            jq2(this).find(".tip").remove();
            let oldTitle = jq2(this).attr("data-old-title");
            if (oldTitle) jq2(this).attr("title", oldTitle);
        }
    );
});
