$(document).ready(function () {
    // Add a new post at the end of the list.
    $("#add").click(function () {
        $("#posts").append('<article class="post"><h2>New Post</h2><p>This is a new blog post.</p></article>');
    });

    // Add a featured post at the top.
    $("#featured").click(function () {
        $("#posts").prepend('<article class="post"><h2>Featured Post</h2><p>Welcome to our featured article.</p></article>');
    });

    // Remove the last post.
    $("#remove").click(function () {
        $("#posts .post").last().remove();
    });

    // Put a tag before and after selected posts.
    $("#posts .post").first().before('<p class="tag">Latest posts</p>');
    $("#posts .post").last().after('<p class="tag">End of posts</p>');

    // Highlight posts that contain the word jQuery.
    $("#posts .post").each(function () {
        if ($(this).text().toLowerCase().includes("jquery")) {
            $(this).addClass("important");
        }
    });
});
