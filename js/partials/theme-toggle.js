const DAY_MODE = "day";
const NIGHT_MODE = "night";
const STORAGE_THEME_LABEL = "dayNightTheme";

document.addEventListener("DOMContentLoaded", () => {
    
   // localStorage.clear()
    const toggle = document.getElementById("theme-toggle-checkbox");
    const body = document.body;

    const savedTheme = localStorage.getItem(STORAGE_THEME_LABEL)
    if (savedTheme === NIGHT_MODE) {
        toggle.checked = true;
        body.classList.add(NIGHT_MODE);
    }
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            body.classList.add(NIGHT_MODE);
            localStorage.setItem(STORAGE_THEME_LABEL, NIGHT_MODE);
        } else {
            body.classList.remove(NIGHT_MODE);
            localStorage.setItem(STORAGE_THEME_LABEL, DAY_MODE);
        }
    });
});