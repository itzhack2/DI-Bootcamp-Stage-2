// 🌟 Exercise 1: Timer
// setTimeout(alertHello, 2000)
// setInterval(addParagraph,2000)
// const interval = setInterval(addParagraph , 2000)

// function alertHello() {
//     alert("hello world !")
// }

// function addParagraph(params) {
//     const p = document.createElement("p")
//     p.textContent= "Hello World"
//     const container = document.getElementById("container")
//     container?.children.length < 5? container?.appendChild(p) : clearParagraphInterval()
// }

// const button = document.getElementById("clear")
// button?.addEventListener("click",clearParagraphInterval)
// function clearParagraphInterval(){
// clearInterval(interval)
// }

// 🌟 Exercise 2 : Move The Box
// let distance = 0 
// let interval 

// function myMove(){
//     interval = setInterval( moveRedSquare , 1)
// }

// function moveRedSquare(){
//     const WIDTH_OF_CONTAINER = 400 
//     const WIDTH_OF_SQUARE = 50 
// if (distance === WIDTH_OF_CONTAINER - WIDTH_OF_SQUARE) return clearInterval(interval)
// distance = distance+1 
// const redSquare = document.getElementById("animate")
// redSquare.style.left = distance + "px"
// }
// 🌟 Exercise 3: Drag & Drop

const yellowBox = document.getElementById("target");
const redBox = document.getElementById("box");

yellowBox?.addEventListener("dragover",handleDragEnter)
yellowBox.addEventListener("dragenter",handleDragEnter);
yellowBox.addEventListener("dragleave",handleDragLeave);
yellowBox.addEventListener("drop",handleDrop);

function handleDragLeave(event) {
    event.preventDefault();
    yellowBox.classList.remove("is-hovered")
}

function handleDragEnter(event){
    event.preventDefault();
    yellowBox.classList.add("is-hovered")
}

function handleDrop() {
    yellowBox.classList.remove("is-hovered");
    yellowBox.append(box);
}