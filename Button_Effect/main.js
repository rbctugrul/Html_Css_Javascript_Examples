const button = document.querySelector(".ripple")

button.addEventListener("click", (e) => {
  const clientX = e.clientX
  const clientY = e.clientY

  const buttonTop = e.target.offsetTop
  const buttonLeft = e.target.offsetLeft

  const xInside = clientX - buttonLeft
  const yInside = clientY - buttonTop

  const circle = document.createElement("span")
  circle.classList.add("circle")
  circle.style.top = yInside + "px"
  circle.style.left = xInside +"px"

  button.appendChild(circle)

  setTimeout(() => circle.remove(), 900)
})