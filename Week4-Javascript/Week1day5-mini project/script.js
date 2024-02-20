// function playTheGame() {
// const isUserReady = confirm(" Do you want to play")
       
//  if(!isUserReady) {
//  alert("No problen,goodbye")
//  return
// }

// const answr = prompt ("Enter a number ")
        
//  if (!isOnlyNumber(number(answr))){
//    alert ("sorry Not a number, Goodbye")
//   return
// }
        
//  if(!isBetweenZeroAndTen(Number(answr))){
// alert("sorry it's not a good number,Goodbey")
//  return
//  }
   
// const computerNumber = generateRandomNumber()
// console.log('computerNumber:',computerNumber)
// console.log( "We are playing the game" )                                         
// }

// function isOnlyNumber(str) {
//  const regex = new RegExp(/^[0-9]*$/)
// return regex.test(str)
// }
    
// function isBetweenZeroAndTen(number) {
// return number >= 0 && number <= 10 
//  }

// function generateRandomNumber () {
// return Math.floor(Math.random() * 11)
// }
----------part 2--------

function playTheGame() {
const isUserReady = confirm(" Do you want to play")
 if(!isUserReady)return alert ("NO problem , goodbye")
}
const computerNumber = generateRandomNumber()
const answr = prompt ("Enter a number ")
let numberOfTries = 0
while (number(answr) != compareNumbers){
    numberOfTries = numberOfTries +1 
    if(numberOfTries === 3 ) return alert ("sorry, too many tries. the number was" + compareNumbers)
    if(!isBetweenZeroAndTen(answr)) return alert("sorrynot a number,goodbye") 
    if(!isBetweenZeroAndTen(number(answr)) return alert ("sorry its not a good number, goodbye"))

    let biggerOrSmaller = (number(answr) > compareNumbers ) ? "bigger" : "smaller"
    alert("your number is " + biggerOrSmaller + " then the computers, guess again")
    answr = prompt(Enter a number)
}
    const finalMesssage =  `WINNER The number was indeed ${compareNumbers}. you found in ${numberOfTries + 1 } tries. `
    alert ("WINNER ! The number was indeed" + compareNumbers + ". You found in" + number (numberOfTries) + 1 + "tries." )

function isOnlyNumber(str) {
 const regex = new RegExp(/^[0-9]*$/)
return regex.test(str)
}
    
function isBetweenZeroAndTen(number) {
return number >= 0 && number <= 10 
 }

function generateRandomNumber () {
return Math.floor(Math.random() * 11)
}
function compareNumbers(userNumber,computerNumber){
 if ( userNumber === compareNumbers){
    alert('WINNER')
    return
 }
 if (userNumber > compareNumbers){
    alert ( your numberis bigger then the computers, guess again)
 }
}






























// function playTheGame() {
// const isUserReady = confirm(" Do you want to play")
   
//     if(!isUserReady) {
//         alert("No problen,goodbye")
//         return
//     }

//     const answr = prompt ("Enter a number ")
//     if (!isOnlyNumber(answr))
//         alert ("sorry Not a number, Goodbye")
//         console.log( "We are playing the game" )
//     }

// function isOnlyNumber(str) {
//     const regex = new RegExp(/^[0-9]*$/)
//     return regex.test(str)
// }