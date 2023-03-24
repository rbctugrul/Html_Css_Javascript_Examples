const contents = document.querySelectorAll(".content")
const navBtn = document.querySelectorAll("nav ul li")

navBtn.forEach((btn,idX) => {
  btn.addEventListener("click",() => {
    hideAllContents()
    hideAllBtns()

    btn.classList.add("active")
    contents[idX].classList.add("show")
  })
})

function hideAllContents(){
  contents.forEach((content) => content.classList.remove("show"))
}

function hideAllBtns(){
  navBtn.forEach((item) => item.classList.remove("active"))
}