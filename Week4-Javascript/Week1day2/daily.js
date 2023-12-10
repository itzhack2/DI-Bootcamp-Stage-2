//***----------Daily Challenge: Words In The Stars---------

const answer = prompt("Type a few words separated by commas"); 

const words = answer.split(",")


const LengthOfLongesWord = getLengthOfLongesWord();

displayRows(words,LengthOfLongesWord);

function displayRows (words,LengthOfLongesWord){
const delimiterRow = createDelimiterRow();
console.log(delimiterRow);
for ( const word of word ){
displayWordWithStars(word , LengthOfLongesWord );
}
 console.log(delimiterRow);
}

function displayWordWithStars(word) {
    const numberOfSpacesToAdd = LengthOfLongesWord - word.length + 1;
const emptySpaces = "" .repeat(numberOfSpacesToAdd);
console.log("*" + word + emptySpaces + "*");
}

function getLengthOfLongesWord(){
    let LengthOfLongesWord = 0 ; 
    for(const word of word){
        const wordLength = word.length; 
        if (wordLength > LengthOfLongesWord){
            LengthOfLongesWord = wordLength
        }
    }
    return  LengthOfLongesWord
}

function createDelimiterRow(){
    const Number_OF_STARS_ON_SIDE = 4
    const numberOfStarsOnFirsrRow = LengthOfLongesWord + Number_OF_STARS_ON_SIDE ;
    return "*".repeat(numberOfStarsOnFirsrRow);
}


































// displayRows()

// function displayRows(){
// const firstRow = createFirstRow () ;
// const numberOfStarsOnFirsrRow = LengthOfLongesWord + 4; //6
// }
// console.log("firstRow", firstRow);


// // function log (word) {
// // console.log(word);
// // }
// // words.forEach(log);
 
// function getLengthOfLongesWord(){
//     let LengthOfLongesWord = 0 ;
//         for (const word of words){
//         const wordLength = word.length; //3
//         if (wordLength > LengthOfLongesWord ){
//         LengthOfLongesWord = wordLength ; 
//         }
//     }
//     return LengthOfLongesWord ;
// }
// function createFirstRow(){
//     let row = "";
//     for (let i = 0;i < numberOfStarsOnFirsrRow; i++){
//         row = row + "*" ;
//     }
// return row;
// }
// const firstRow = createFirstRow () ;



