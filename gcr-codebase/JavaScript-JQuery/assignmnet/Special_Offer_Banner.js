$(document).ready(function () {
    let currentBanner = 0;
    let banners = $(".banner");

    // Hide only the first banner.
    $("#hide").click(function () {
        banners.eq(0).hide();
    });

    // Show all banners.
    $("#show").click(function () {
        banners.show();
    });

    $("#slideUp").click(function () {
        banners.slideUp();
    });

    $("#slideDown").click(function () {
        banners.slideDown();
    });

    $("#fadeOut").click(function () {
        banners.fadeOut();
    });

    $("#fadeIn").click(function () {
        banners.fadeIn();
    });

    // Rotate banners every five seconds.
    banners.hide().eq(0).fadeIn();

    setInterval(function () {
        banners.eq(currentBanner).fadeOut(500, function () {
            currentBanner = (currentBanner + 1) % banners.length;
            banners.eq(currentBanner).fadeIn(500);
        });
    }, 5000);
});
