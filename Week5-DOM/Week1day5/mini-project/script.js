function getColor(e){
console.log(e.target);
}
const color = document.querySelectorAll(".color")
console.log(color);
for (let element of color){
    console.log(element);
    element.addEventListener("click",getColor)
}
    
