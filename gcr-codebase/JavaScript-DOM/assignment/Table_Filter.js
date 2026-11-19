// Q6: Real-Time Table Filter (case-insensitive)

const searchInput = document.getElementById("searchInput");
const studentRows = document.querySelectorAll("#studentTable tbody tr");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.trim().toLowerCase();
    let visibleRows = 0;

    studentRows.forEach(function (row) {
        const rowText = row.textContent.toLowerCase();
        const matchesSearch = rowText.includes(searchText);

        row.style.display = matchesSearch ? "" : "none";
        if (matchesSearch) visibleRows++;
    });

    noResults.classList.toggle("hidden", visibleRows !== 0);
});
