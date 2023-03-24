let addToDoButton = document.getElementById("addToDo");

let toDoContainer = document.getElementById("toDoContainer");

let inputText = document.getElementById("inputText");

let clearToDo= document.getElementById("clearToDo");

//Adds p tag on button click.
addToDoButton.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling")
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    //When clicking on a paragraph, it draws a line over the paragraph.
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })

    //When double-clicking on a paragraph, it draws a line over the paragraph.
    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
    })

    //when clicking on clear button, it clear all paragraphs.
    clearToDo.addEventListener("click", function(){
    paragraph.remove();
    })
})


