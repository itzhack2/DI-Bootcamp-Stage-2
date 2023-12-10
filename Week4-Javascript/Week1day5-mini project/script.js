function playTheGame() {
    const isUserReady = confirm(" Do you want to play")
       
    if(!isUserReady) {
        alert("No problen,goodbye")
        return
    }
     
    const computerNumber = generateRandomNumber ()
    
    let answr = prompt ("Enter a number ")
    while (Number(answr)!= computerNumber){
        
        if (!isOnlyNumber(answr)){
            alert ("sorry Not a number, Goodbye")
            return
        }
        
        if(!isBetweenZeroAndTen(Number(answr))){
            alert("sorry it's not a good number,Goodbey")
            return
        }
        answr = prompt ("Enter a number ")

    }

     console.log( "We are playing the game" )                                              ***///console.log('computerNumber:', computerNumber);)
    }

    // function canGameContinue(){

    // }
    
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

function computerNumber(userNumber,computerNumber){
    if(userNumber=== computerNumber){
        alert("WINNER")
        return
    }
    if() 
    alert("Your number is bigger then the computer's, guess again ")
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