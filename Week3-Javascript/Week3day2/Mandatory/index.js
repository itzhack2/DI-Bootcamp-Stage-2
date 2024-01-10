                // **🌟 Exercise 1: Your Favorite Food

// Store your favorite food into a variable.
const favoriteFood = "apples"

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
const favoriteMeal = "breakfsdt"

// Console.log I eat <favorite food> at every <favorite meal>

console.log(  `i eat ${favoriteFood} at every ${favoriteMeal}` )


                        // **🌟 Exercise 2 : Series

// **Part I

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
const myWatchedSeriesLength = myWatchedSeries.length
// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
const myWatchedSeriesSentence = `${myWatchedSeries[0]},${myWatchedSeries[1]},${myWatchedSeries[2]}`
// Console.log a sentence using both of the variables created above
// For example 
const sentence = `I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`
console.log(sentence)

// **Part II

// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2] = "friends"
// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push ("breaking bad")
// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift( "better call saul")
// Delete the series “black mirror”.
delete myWatchedSeries[1]
// Console.log the third letter of the series “money heist”.
const moneyHeist = myWatchedSeries[2]
console.log(moneyHeist[2]);
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);


                    // ***🌟Exercise 3 : The Temperature Converter

//  Store a celsius temperature into a variable.
const celsiusTemp = 20;
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const fahrenheitTemp =celsiusTemp / 5 * 9 = 32
console.log(fahrenheitTemp)


                    // ***🌟 Exercise 4 : Guess The Answers 
// What will be the outcome of a + b in the first expression ?
p: 34 + 21 = 55
A: 55
// What will be the outcome of a + b in the second expression
p: 21 + 2 (a=2) = 23
A : 23 
// What is the value of c?
P: c dot have value 
A: undefined 
// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5');
P: 75 because 3,4 are number and "5" is a string  
A: 75

                     // **Exercise 5 : Guess The Answers
typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: i dot have one
// Actual:'number'

typeof("hello")
// Prediction: string
// Actual: 'string'

typeof(true)
// Prediction: i dot have one
// Actual:'boolean'

typeof(1 != 2)
// Prediction: i dot have one
// Actual: 'boolean'

"hamburger" + "s"
// Prediction: hamburgers
// Actual:'hamburgers'

"hamburgers" - "s"
// Prediction: i dot have one
// Actual: NaN

"1" + "3"
// Prediction: '4'
// Actual: '13'

"1" - "3"
// Prediction: 2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: undefined
// Actual: NaN


99 * "hello"
// Prediction: hello*99
// Actual: NaN

1 != 1
// Prediction: 1
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false 1 is number and "1" is a string
// Actual: false


                    //** */ Exercise 6 : Guess The Answers


5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction:  i dot have one
// Actual: -1

10 % 5
// Prediction:  i dot have one
// Actual: 0

5 % 10
// Prediction: i dot have one
// Actual: 5 

"Java" + "Script"
// Prediction: 'string'+'string' = "stringstring"
// Actual: 'JavaScript'

" " + " "
// Prediction: i dot have one
// Actual: '  '

" " + 0
// Prediction: i dot have one
// Actual: '0'

true + true
// Prediction: i dot have one
// Actual: 2

true + false
// Prediction: i dot have one
// Actual:1

false + true
// Prediction: i dot have one
// Actual: 1

false - true
// Prediction: i dot have one
// Actual: -1

!true
// Prediction:  i dot have one
// Actual: false

3 - 4
// Prediction: 3-4 = -1 
// Actual: -1

"Bob" - "bill"
// Prediction: undefined
// Actual: NaN