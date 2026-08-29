const toggleBtn = document.getElementById("toggleBtn");

// Detect the browser/system's preferred color scheme
const systemMode = window.matchMedia(
"(prefers-color-scheme: dark)"
);

// Get the current system theme
function getSystemTheme() {
return systemMode.matches ? "dark" : "light";
}

// Apply the selected theme to the page
function applyTheme(theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

}

// Load the theme when the page starts
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    // If a theme was already saved,
    // use the saved theme.
    if (savedTheme) {
        applyTheme(savedTheme);
        return;
    }

    // First time opening the page:
    // use the browser/system theme.
    const systemTheme = getSystemTheme();

    applyTheme(systemTheme);

    // Save the system theme for future visits
    localStorage.setItem("theme", systemTheme);

}

// Load theme when page opens
loadTheme();

// Toggle between Dark and Light Mode
toggleBtn.addEventListener("click", function () {
    const currentTheme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    const newTheme = currentTheme === "dark"
        ? "light"
        : "dark";

    // Apply new theme
    applyTheme(newTheme);

    // Remember user's choice
    localStorage.setItem("theme", newTheme);

});
