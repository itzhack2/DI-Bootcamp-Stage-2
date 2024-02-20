// // const h1 = document.querySelector("article > h1")
// const h1 = getFirstElememt("h1")  
// const h2 = getFirstElememt("h2")
// const h3 = getFirstElememt("h3")
// const secondParagraph = getsecondParagraph()
// removeLastLine()
// addbutton()

// h2?.addEventListener("click", changBackground)
// h3?.addEventListener("click" hideH3)
// h1?.addEventListener("mouseover" randomizeH1size)


// function getRondomNumber(){
// return Math.floor(Math.random() * 100 + 1 )  
// }
// function randomizeH1size{
//     const randomNumber = getRondomNumber()
//     h1.style.fontSize = getRondomNumber() + "px"
// }

// function makeParagraphsBold(){
//     const paragraphs  = document.querySelectorAll("p")
//     for (const paragraph of paragraphs){
//         paragraph.classList.add("bold")
//     }
// }

// function addbutton(){
//     const button = document.createElement("button")
//     button.textContent = "make everything bold"
//     button.addEventListener("click", makeParagraphsBold)
//     const article = getFirstElememt ("article")
//     article.appendchlid(button)
// }
// function hideH3(){
//     h3.classList.add("hide")
// }
// function changBackground(){
//     h2?.classList.add("red")
// }

// -----------🌟 Exercise 2 : Work With Forms-----------
// // const form = document.querySelector("form");
// // const firstName = document.querySelector("[name=fname]")?.value;
// // const lastName = document.querySelector("[name=lname]")?.value;
// // const button = document.getElementById("submit");
// // function logFormInputs(e){
// //     e.preventDefault();
// //     console.log(firstName, lastName);
// //     console.log("EVENT", e );
// // }
// // button?.addEventListener("click", logFormInputs)

// const form = document.querySelector("form");
// function logFormInputs(e){
//     e.preventDefault();
//     const firstName = document.querySelector("[name=fname]")?.value;
//     const lastName = document.querySelector("[name=lname]")?.value;
//     const ul = document.querySelector(".useAnswer");
//     const firstLi = document.createElement("li");
//     const secondLi= document.createElement("li");
    
//     if( firstName === "" || lastName === "")return alert( "Please fill in all fields");
//     ul.innerHTML = "" ; 
//     firstLi.innerText = firstName; 
//     secondLi.innerText = lastName; 
//     ul.append(firstLi,secondLi);
// }
// form.addEventListener("submit", logFormInputs)

// --------------🌟 Exercise 3 : Transform The Sentence-----------
// Declare a global variable named
// let allBoldItems ;
// // Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// function getBoldItems(){
// allBoldItems = document.getElementById("strong")
// }
// // Create a function called highlight() that changes the color of all the bold text to blue.
// function highlight() {
// getBoldItems();
// for ( const boldItems of allBoldItems){      
// boldItems.style.color = "blue";
// }
// }
// // Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// function returnNormal(){
//     getBoldItems();
//     for ( const boldItems of allBoldItems){
//         boldItems.style.color = "black";
//     }
// }
// // Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph).
// const paragraph = document.querySelector("P");
// paragraph.addEventListener('mouseover', highlight);
// paragraph.addEventListener('mouseout', returnNormal);
// <!-- 🌟 Exercise 4 : Volume Of A Sphere -->

// const form = document.getElementById("my-form")
// const radius = document.getElementById("radius")
// const valume = document.getElementById("valume")
// form.addEventListener("submit" , handleSubmit)

// const Number_Of_Decimals = 2 ;

// function handleSubmit(e){
//     e.preventDefault();
//     const r =Number(radius.value);
//     if(Number.isNaN(r))return;
//     const v = (4/3) * Math.PI * r ** 3 ;
//     valume.value = v.toFixed(Number_Of_Decimals);

// }