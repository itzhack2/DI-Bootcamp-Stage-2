// // -----------Exercises XP----------

// // ** 🌟 Exercise 1 : List Of People **
// // Part I - Review About Arrays
// // 1.Write code to remove “Greg” from the people array.
// const people = [ "Greg","Mary","Devon","James" ];
// const firstElement = people.shift();
// console.log(people);
// // 2.Write code to replace “James” to “Jason”.
// people[people.length -1 ] = "Jason"

// // 3.Write code to add your name to the end of the people array.
// people.push("Itzhack")

// // 4.Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// console.log(people.indexOf("Mary"));

// // 5.Write code to make a copy of the people array using the slice method.
// // The copy should NOT include “Mary” or your name.
// people.slice(1 )

// // 6.Write code that gives the index of “Foo”. Why does it return -1 ?
// console.log(people.indexOf("Foo"));

// // 7.Create a variable called last which value is the last element of the array.
// const last = people[ people.length -1 ]
// console.log('last:' last);


//               // ** Part II - Loops **
// // Using a loop, iterate through the people array and console.log each person.
// const people = [ "Greg","Mary","Devon","James" ];
// for (const person of people){
//     console.log("this person is", person );
// }
// // Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// // Hint: take a look at the break statement in the lesson.
// if(people === "Mary"){break}

//     //    ***🌟 Exercise 2 : Your Favorite Colors***

// //  Create an array called colors where the value is a list of your five favorite colors.
// const Colors = ["Blue", "Yellow", "Red", "Green","Pink"];
// const suffixes = [ "st ", "nd", "rd", "th","tr"]

// //  Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect…
// for (let i = 0;i < Colors.length;i++){
//     console.log(`My #${i+1}${suffixes[i]} choise is ${Colors[i]}`)
// }
//             // ***🌟 Exercise 3 : Repeat The Question***
// // Prompt the user for a number.
// // Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// const answer = prompt ("please enter a number ")
// const number = Number(answer)
// console.log('number:', number + 1 )            
// // While the number is smaller than 10 continue asking the user for a new number.
// // Tip : Which while loop is more relevant for this situation?
// let number = null
// while (number !=10){
// const answer = prompt("Plesase enter a number")
//  const number = Number(answer)
// }
//             // ***🌟 Exercise 4 : Building Management***
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//     firstFloor: 3,
//     secondFloor: 4,
//     thirdFloor: 9,
//     fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//     sarah: [3, 990],
//     dan:  [4, 1000],
//     david: [1, 500],
//     },
// }
// // Copy and paste the above object to your Javascript file.
// //  Console.log the number of floors in the building.
//  console.log(building.numberOfFloors)

// //  Console.log how many apartments are on the floors 1 and 3.
// console.log("apartments on first floor:" building.numberOfAptByFloor.firstFloor);
// console.log("apartments on third floor:" building.numberOfAptByFloor.thirdFloorFloor);
// //  Console.log the name of the second tenant and the number of rooms he has in his apartment.
// console.log("second tenant:"building.nameOfTenants[0])
// console.log("dan has this many rooms:", building.numberOfRoomsAndRent.dan)
// //  Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// const sarahRent=building.numberOfRoomsAndRent.sarah[1]
// const davidRent=building.numberOfRoomsAndRent.david[1]
// const danRent=building.numberOfRoomsAndRent.dan[1]

// if (sarahRent + danRent + davidRent ){
//     building.numberOfRoomsAndRent.dan[1] = 1200 
// }
// console.log(building)

//             // ***🌟 Exercise 5 : Family***
// // Create an object called family with a few key value pairs.
// const family = {
//     dad: "John"
//     mom: "Mary"
//     daughter : "Jane"
// }
// // Using a for in loop, console.log the keys of the object.
// for ( const key in family ) {
//     console.log( 'key', key )
// }
// // Using a for in loop, console.log the values of the object.
// for ( const key in family ){
//     console.log( family [key] );
// }

//             // ***🌟Exercise 6 : Rudolf***

// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// let sentence = ""
// for ( const key in details ) {
// sentence = sentence + " " + key + " " + details [key] 
// }
// console.log(sentence)

//             // ***🌟 Exercise 7 : Secret Group***

// //  A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// let acronym = ""
// const sortedNames = names.sort ()
// for (const name of sortedNames ){
//     console.log(name)
//     acronym = acronym + name [0]
// }
// // Console.log the name of their secret society. The output should be “ABJKPS”
// console.log(acronym)