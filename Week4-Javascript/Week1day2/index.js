// --------------Exercises XP------------
        // **🌟 Exercise 1 : Information
// -------------------------------------------------------------------------------
        //**Part I : function with no parameters
// Create a function called infoAboutMe() that takes no parameter.
// function infoAboutMe() {
   
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// console.log( "my name is itzhack" );
// }
// Call the function.
//infoAboutMe()
// -------------------------------
        // **Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
// console.log("your name is", personName)
// console.log(" you are " ,personAge, "years old")
// console.log("your favorite color is", personFavoriteColor)
// }




// -------------------------------------------------------------------------------
        //**🌟 Exercise 2 : Tips

// Create a function named calculateTip() that takes no parameter.
// function calculateTip() {  

// // Inside the function, use prompt to ask John for the amount of the bill.
// const amount = Number (prompt(" How much is the bill?"))
// let tipPercent
// if (amount < 50 ) tipPercent = 0.2
// if (amount > 50  && amount < 200 ) tipPercent=0.15   
// if (amount > 200) tipPercent = 0.1

// const totalBill = amount * (1 + tipPercent)

// console.log("bill:", amount)

// console.log("tip bill including tip:", totalBill )
// }
// calculateTip()
// -------------------------------------------------------------------------------
      // **🌟 Exercise 3 : Find The Numbers Divisible By 23

// Create a function call isDivisible() that takes no parameter.
// function isDivisible (divisor){
// In the function, loop through numbers 0 to 500.
// let sum = 0
// for ( let i = 0;i < 500;i++){
// Console.log all the numbers divisible by 23.
// if (i % 23/divisor === 0 ) {
// console.log(i);
// sum = sum + i 
// } 
// console.log("the sum of number divisble by 23 is:", sum);
// }
// }
// isDivisible(23)

// At the end, console.log the sum of all numbers that are divisible by 23.      
// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

// Bonus: Add a parameter divisor to the function.
// isDivisible(divisor)
// 
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
// -------------------------------------------------------------------------------
        //**🌟 Exercise 4 : Shopping List
// Add the stock and prices objects to your js file.
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// const shoppingList = [ "banana" , "orange", "apple"]
// Create a function called myBill() that takes no parameters.
// function myBill() {
//    for (const item of shoppingList){
//          const quantityInstock = stock [item]

//          if (quantityInstock > 0 ) {
//          const price = price [item]
//          console.log('the price of',item, "is", price);
//          console.log("and we have this many in stock", stock[item])
//          stock[item] = stock [item] -1        
//          console.log("the new quabtity of this item in stock is ", stock[item])

//         }else{
//         console.log("there is no ", item, "in stock");
//         }
//     }
// }
// myBill()
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

// -------------------------------------------------------------------------------
        //**Exercise 5 : What’s In My Wallet ?
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// In the function, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// After you created the function, invoke it like this:
// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// function changeEnough (itemPrice, amountOfChange){
// itemPrice : number
// amountOfChange : array
// const sum = calculateSum(amountOfChange) //8.5
// if (sum > itemPrice){
//         console.log("you can afford it")
// return true
// }else{
//         console.log( "you cannot afford it")
// return false
// }
// }

//[1,2,3]
// calculateSum([1,2,3])//6
// calculateSum([25, 20, 5, 0])
// function calculateSum (arr){
// let sum = 0 
// for ( let i = 0;i < arr.length;i++){
//         let coinValue 
//         cost numberOfconis = arr[i]
//         if (i===0){ coinValue = 0.25 }
//         if (i===1){ coinValue = 0.10 }
//         if (i===2){ coinValue = 0.05 }
//         if (i===3){ coinValue = 0.01 }    
//         console.log("we have", i, "coins that have a value of", coinValue);   
//         sum = sum + numberOfconis * coinValue
//         }
//         console.log("the total sum is", sum);
//         return sum 

// }
// calculateSum([25,20,5,0])




//---------------------------------------------------------------------------------

        //**🌟 Exercise 6 : Vacations Costs

// 1. Define a function called hotelCost().
// hotelCost()

function hotelCost (){
let answer = " user answer" 

while ( !isOnlyNumbers (answer)){
answer = prompt (" how many nights would you like to stay?")
}
const numberofNight = Number (answer)
const costPerNight = 140 
const totalPrice = numberofNight * costPerNight
console.log('totalPrice:', totalPrice);
return totalPrice
}

function isOnlyNumbers(str){
const regex = new Regexp(/^[0-9]*$/)
return regex.test(str)
}
function includesNumbers(str){
 const regex = new Regexp(/\d/)
 return regex.test(str)
}
planeRideCost()
function planeRideCost() {
let destination
while(destination == null || destination == "" || includesNumbers (destination)){
destination =prompt("where are you going")

}
console.log( "your destination is", destination);






// 2. Define a function called planeRideCost().
// *It should ask the user for their destination.
// *If the user doesn’t answer or if the answer is not a string, ask again.
// *The function should return a different price depending on the location.
// **“London”: 183$
// **“Paris” : 220$
// **All other destination : 300$

// 3. Define a function called rentalCarCost().
// *It should ask the user for the number of days they would like to rent the car.
// *If the user doesn’t answer or if the answer is not a number, ask again.
// *Calculate the cost to rent the car. The car costs $40 everyday.
// **If the user rents a car for more than 10 days, they get a 5% discount.
// *The function should return the total price of the car rental.

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// 5. Call the function totalVacationCost()

// 6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.