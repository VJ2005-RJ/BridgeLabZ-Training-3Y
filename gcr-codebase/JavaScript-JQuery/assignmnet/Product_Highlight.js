$(document).ready(function () {
    // Style products that have a discount using an attribute selector.
    $('[data-discount="yes"]').addClass("discount");

    // Click a product to highlight it.
    $(".product").click(function () {
        $(this).toggleClass("highlight");
    });

    // Show extra details when the mouse enters a product.
    $(".product").mouseenter(function () {
        $(this).find(".details").show();
    });

    $(".product").mouseleave(function () {
        $(this).find(".details").hide();
    });

    // Favorite button toggles the selected class.
    $(".favorite").click(function (event) {
        event.stopPropagation();
        $(this).toggleClass("selected");

        // Check the data attribute for stock.
        if ($(this).closest(".product").data("stock") === "no") {
            alert("Sorry, this product is out of stock.");
        }
    });
});
