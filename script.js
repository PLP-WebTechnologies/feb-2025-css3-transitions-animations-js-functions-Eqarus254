// Animate the box on button click
document.querySelector("#animateBtn").addEventListener("click", function () {
    const box = document.querySelector("#box");
    box.classList.add("pulse");
  
    // Remove the class after animation ends so it can be reused
    box.addEventListener("animationend", () => {
      box.classList.remove("pulse");
    }, { once: true });
  });
  
  // Save selected theme to localStorage
  function saveThemePreference(theme) {
    localStorage.setItem("theme", theme);
  }
  
  // Load and apply theme from localStorage
  function loadThemePreference() {
    const theme = localStorage.getItem("theme") || "light";
    document.body.className = theme;
    document.querySelector("#themeSelect").value = theme;
  }
  
  // Handle theme saving
  document.querySelector("#savePreference").addEventListener("click", () => {
    const selectedTheme = document.querySelector("#themeSelect").value;
    saveThemePreference(selectedTheme);
    loadThemePreference(); // Apply immediately
  });
  
  // Load on page startup
  window.onload = loadThemePreference;
  