//Exercise 1 : Scope 
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }console.log( funcOne());
// #1.1 - run in the console:
//funcOne() 
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// Uncaught TypeError
// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?


// 🌟 Exercise 2 : Ternary Operator

// function winBattle(){
//     return true;
// }
// const winBattle = () => true;
// let experiencePoints;
// experiencePoints = winBattle() ? 10 : 1
// console.log("experiencePoints:",experiencePoints);




// 🌟 Exercise 3 : Is It A String ?
// const isString = (arg) => typeof arg === "string";
// console.log('isString("hello):', isString("hello"));
// console.log("isString(123):", isString(123));



//🌟 Exercise 4 : Colors
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, i)=> console.log(`#${i+1} choice is ${color}`));

// const isVioletInArray = !colors.every((color) => color == "violet");
// console.log("isVioletInArray:",isVioletInArray)
// לסיים את השאלה למעלה



// 🌟 Exercise 5 : Colors #2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// const getOrdinal = (index) => ([1, 2, 3].includes(index) ? ordinal[index] : ordinal[0]);

// colors.forEach((color,index) => {
//     const incrementedIndex = index + 1 ;
//     console.log(`${incrementedIndex} ${getOrdinal(incrementedIndex)} choice is ${color}`);
// });

// Exercise 6 : Bank Details
// let bankAmount = 0;

// const vatRate = 0.17;

// const details = ["+200","-100","-146","+167","-2900"]

// const currentBankAccount = addVat(details);
// console.log("currentBankAccount:",currentBankAccount);

// function addVat(expenses) {
//     let total = 0 ;
//     expenses.forEach(expense => {
//         const numExpense = Number(expense);
//         const expenseWithVat = numExpense * (1+vatRate);
//         total += expenseWithVat;
//     });
//     return total;
// }