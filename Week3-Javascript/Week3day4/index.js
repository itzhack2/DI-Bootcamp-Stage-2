// Exercise 1: Simple If/Else Statement
// Instructions

// let x = 5;
// let y = 2;
 
// if ( x > y){
// console.log("x is the biggest number");
// }
// else {
// console.log ("y is the biggest number");
// }


// /Exercise 2: Chihuahua
// Instructions
// 1.Create a variable called newDog where it’s value is “Chihuahua”.
// let newDog = "Chihuahua"
// Check and display how many letters are in newDog.
// console.log(newDog.length); 9
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// console.log(newDog.toUpperCase());
// console.log(newDog.toLowerCase());
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

// if (newDog=="Chihuahua"){
//    console.log("I love Chihuahuas, it’s my favorite dog breed"); 
// }else{
//     console.log("I dont care, I prefer cats");
// }

// Exercise 3: Even Or Odd

//1.Prompt the user for a number and save it to a variable.
// 6

// let num=prompt("enter your nomb")
// if (num % 2){
// console.log("odd");
// }else{
// console.log("even");
// }

// let number = prompt("Enter a number: ");

// if(number % 2 == 0) {
//     console.log("The number is even.");
// }
// else {
//     console.log("The number is odd.");
// }

// Exercise 4: Group Chat

// const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000" , "luffy"];

// if (users.length === 0){
//     console.log( `No one is online`);
// }else if (users.length === 1){
//     console.log(`${users[0]} is online`);
// }else if ( users.length === 2 ){
//     console.log(`${users[0]} and ${users[1]} are online`);
// }else {
//  const remainingUsers = users.length - 2 ;
// console.log(`${users[0]}, ${users[1]} and ${remainingUsers} more are online`);
// }


// Daily Challenge: Not Bad
// const sentence= " The movie is not that bad , I like it "
// const wordNot = sentence.search("not")
// const wordBad = sentence.search("bad")
// if (wordNot== -1){
//     console.log(sentence);
// }else if ( wordNot < wordBad ){
// console.log('wordBad:',wordBad);
// console.log('wordNot:',wordNot);

// const firstPart  = sentence.slice(0,wordNot)
// const secondPart = sentence.slice(wordBad + 3)
// console.log( firstPart + "good" + secondPart);
// }else{
//     console.log(sentence);
// }

// console.log “no one is online”.
// console.log “<name_user> is online”.
// console.log “<name_user1> and <name_user2> are online”.
// name_user1, name_user2 and 3 more are online