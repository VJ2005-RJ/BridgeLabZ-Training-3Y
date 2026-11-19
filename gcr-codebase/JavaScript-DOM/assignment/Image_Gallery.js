// Q5: Image Gallery with Modal Preview

const gallery = document.getElementById("gallery");
const imageModal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const largeImage = document.getElementById("largeImage");
const closeModal = document.getElementById("closeModal");

gallery.addEventListener("click", function (event) {
    if (event.target.tagName !== "IMG") return;

    // Use the clicked image's source for the larger preview.
    largeImage.src = event.target.src.replace("/300/200", "/900/600");
    largeImage.alt = event.target.alt;
    imageModal.classList.remove("hidden");
});

function hideModal() {
    imageModal.classList.add("hidden");
    largeImage.src = "";
}

// Clicking the dark background closes the modal.
imageModal.addEventListener("click", hideModal);

// A click inside the modal should not reach the background listener.
modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
});

closeModal.addEventListener("click", hideModal);
