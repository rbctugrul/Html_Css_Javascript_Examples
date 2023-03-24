const background = document.getElementById("background")
const passwordLabel = document.getElementById("passwordLabel")
const passwordInput = document.getElementById("password")

passwordInput.addEventListener("input", (e)=> {
  const length = e.target.value.length
  const bgBlur = 20 - (length*2)
  background.style.filter = `blur(${bgBlur}px)`

  if(length >= 10){
    passwordLabel.innerText = "Strong Password"
  }else{
    passwordLabel.innerText = "Password"
  }
})