let x = document.getElementById("Jsstyle");

function RespondClick( ){

x.style.color = "red"
}

x.addEventListener("click",RespondClick);
x.addEventListener("mouseout",RespondMouseOut);

function RespondMouseOut(){
x.style.backgroundColor = "blue"
}