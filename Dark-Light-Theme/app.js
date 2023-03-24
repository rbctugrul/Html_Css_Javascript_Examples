
const darkModeToggler = document.getElementById("dark-mode-toggler");

darkModeToggler.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
})