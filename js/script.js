const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");

lightMode.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
});

darkMode.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
});