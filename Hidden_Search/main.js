const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener("click", () => {
   input.classList.toggle("noactive")
})