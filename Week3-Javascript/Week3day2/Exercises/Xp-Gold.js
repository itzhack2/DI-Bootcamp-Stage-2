// Exercise 1 : Favorite Color
// let sentence = ["my","favorite","color","is","blue"];
// console.log(sentence.join());
// Exercise 2 : Mixup
let str1 = "mix";
let str2 = "pod";
// Extract the first 2 characters from each string
let str1FirstTwo = str1.slice(0, 2);
let str2FirstTwo = str2.slice(0, 2);
// Swap and concatenate the first 2 characters
let newStr1 = str2FirstTwo + str1.slice(2);
let newStr2 = str1FirstTwo + str2.slice(2);
console.log(newStr1);
console.log(newStr2);  
// Exercise 3 : Calculator
// Prompt the user for the first number
let num1 = prompt("Enter the first number:");

// Convert the user input to a number (assuming the user enters a valid number)
num1 = parseFloat(num1);
console.log("The first number entered by the user is:", num1);

let num1 = prompt("Enter another number:");