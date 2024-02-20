// 1.
// 5 >= 1 //true
// 0 === 1 //false
// 4 <= 1 //false
// 1 != 1 //false
// "A" > "B" //false
// "B" < "C" //true
// "a" > "A" //true
// "b" < "A" //false
// true === false //false
// true != true //false

2.
let userInput = prompt("Please enter a string of numbers separated by commas:");


let numbersArray = userInput.split(',').map(Number);


let sum = numbersArray.reduce((acc, num) => acc + num, 0);

console.log("Sum of the numbers:", sum);