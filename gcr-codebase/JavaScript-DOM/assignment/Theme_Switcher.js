// Q4: Theme Switcher using setAttribute()

const themeButtons = document.querySelectorAll(".theme-button");
const currentThemeText = document.getElementById("currentTheme");
const pageBody = document.body;

const themeStyles = {
    light: { background: "#ffffff", text: "#222222" },
    dark: { background: "#222222", text: "#ffffff" },
    blue: { background: "#dceeff", text: "#073763" }
};

function applyTheme(themeName) {
    const selectedTheme = themeStyles[themeName];
    if (!selectedTheme) return;

    // Store the selected theme in a custom data attribute.
    pageBody.setAttribute("data-theme", themeName);
    pageBody.setAttribute("class", `theme-${themeName}`);

    pageBody.style.backgroundColor = selectedTheme.background;
    pageBody.style.color = selectedTheme.text;
    currentThemeText.textContent = `Current theme: ${themeName[0].toUpperCase()}${themeName.slice(1)}`;
}

themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        applyTheme(button.dataset.theme);
    });
});

// Start with the light theme.
applyTheme("light");
