// 🌟 Exercise 1 : Find The Sum

// const addNumbers = (a, b) => a + b;
// addNumbers(4,3)
// console.log(addNumbers);

// 🌟 Exercise 2 : Kg And Grams
// function convertKilogramsToGrams(num) {
//     console.log("num * 1000" , num * 1000);
//     return num * 1000;
// }
// const result =  convertKilogramsToGrams(3);
// console.log("result:",result);

// 🌟 Exercise 3 : Fortune Teller
// const name = "ben"
// (function addElementsToDom(numOfChildren, partnerName, geographicLocation, jobTitle){
//     const sentence = `You Will be a ${jobTitle} in ${geographicLocation} and married to ${partnerName} with ${numOfChildren}kids.`;
//     console.log("sentenes:", sentence);
//     const p = document.createElement("p")
//     p.innerText=sentence;
//     document.body.appendChild(p);
// })(0, "nobody","paris", "coder");
 
// 🌟 Exercise 4 : Welcome
// (function(name) {
//     const div = document.createElement("div");
//     div.innerText=name;
    
//     const image = document.createElement("img");
//     image.src = "https://picsum.photos/50";

//     const navbar = document.querySelector(".navbar");
//     navbar.appendChild(div);
//     navbar?.appendChild(image);
// })("ben");
// 🌟 Exercise 5 : Juice Bar
// const isLastElement = (array, index) => index === array.length -1;

// function makeJuice(size) {
//     let sentence = `The Client wants a ${size} drink containing`;
//     const ingredients = []
//     addIngredients("rhum","whiskey","coke");
//     addIngredients("water","lime","sugar");
//     addIngredients("vodka","tequila","soda");
//     console.log("ingredients:",ingredients);
//     displaySentence(ingredients);

//     function addIngredients(first,second,third) {
//         ingredients.push(first,second,third);
//     }

//     function displaySentence(ingredients) {
//         ingredients.foreach((ingredients, i) => {
//             const commaOrFullStop = isLastElement(ingredients, i) ? "." : ",";
//             const word = `${ingredients}${commaOrFullStop}`;
//             sentence += word;
//         });
//         const p = document.createElement("p")
//         p.innerText
//         p.classList.add("h1, text-primary")
//         document.body.appendChild(p);
//     }
// }
// makeJuice("big");





























