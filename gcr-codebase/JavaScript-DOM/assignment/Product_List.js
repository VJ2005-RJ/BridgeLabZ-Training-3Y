// Q1: Dynamic Product List Manager using event delegation

const productInput = document.getElementById("productInput");
const addProductButton = document.getElementById("addProductButton");
const productList = document.getElementById("productList");

function addProduct() {
    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name.");
        productInput.focus();
        return;
    }

    const listItem = document.createElement("li");
    listItem.className = "product-item";
    listItem.style.margin = "10px 0";

    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.dataset.action = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete";

    listItem.append(nameSpan, editButton, deleteButton);
    productList.appendChild(listItem);

    productInput.value = "";
    productInput.focus();
}

addProductButton.addEventListener("click", addProduct);

// One listener on the parent handles buttons for all current and future items.
productList.addEventListener("click", function (event) {
    const clickedButton = event.target.closest("button");
    if (!clickedButton) return;

    const listItem = clickedButton.closest(".product-item");
    if (!listItem) return;

    if (clickedButton.dataset.action === "delete") {
        listItem.remove();
    }

    if (clickedButton.dataset.action === "edit") {
        startEditing(listItem);
    }
});

function startEditing(listItem) {
    if (listItem.querySelector("input")) return;

    const nameSpan = listItem.querySelector(".product-name");
    const oldName = nameSpan.textContent;
    const editInput = document.createElement("input");

    editInput.type = "text";
    editInput.value = oldName;
    nameSpan.replaceWith(editInput);
    editInput.focus();
    editInput.select();

    function saveEdit() {
        if (!editInput.isConnected) return;

        const updatedName = editInput.value.trim() || oldName;
        const updatedSpan = document.createElement("span");
        updatedSpan.className = "product-name";
        updatedSpan.textContent = updatedName;
        editInput.replaceWith(updatedSpan);
    }

    // Save when Enter is pressed or when the user clicks outside this item.
    editInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") {
            editInput.value = oldName;
            saveEdit();
        }
    });

    setTimeout(function () {
        document.addEventListener("click", function outsideClick(event) {
            if (!listItem.contains(event.target)) {
                saveEdit();
                document.removeEventListener("click", outsideClick);
            }
        });
    }, 0);

    editInput.addEventListener("blur", saveEdit, { once: true });
}
