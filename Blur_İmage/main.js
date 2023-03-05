var background = document.querySelector(".background")
var number = document.querySelector(".number")

let blur = 1

let int = setInterval(backgroundBlur, 30)

function backgroundBlur(){
   blur++

   if(blur > 99){
      clearInterval(int)
   }

   number.innerText = blur + "%"
   background.style.filter = `blur(${50 - (blur/2)}px)`
}

backgroundBlur()