//🌟 Exercise 1 : Comparison
// function compareToTen(num) {
//     return new Promise((resolve, reject) => {
//       if (num <= 10) {
//         resolve(`${num} is less than or equal to 10`);
//       } else {
//         reject(`${num} is greater than 10`);
//       }
//     });
//   }

// //In the example, the promise should reject  
//   compareToTen(15)
//     .then(result => console.log(result))
//     .catch(error => console.error(error)); // Rejects  
  
// //In the example, the promise should resolve
//   compareToTen(8)
//     .then(result => console.log(result)) // Resolves
//     .catch(error => console.error(error));
  
//🌟Exercise 2 : Promises
// function delayedSuccess() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Success');
//       }, 4000);
//     });
//   }

// delayedSuccess()
// .then(result => console.log(result)) // Resolves after 4 seconds
// .catch(error => console.error(error)); // Won't be called in this case
//🌟 Exercise 3 : Resolve & Reject
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// const resolvedPromise = Promise.resolve(3);
// resolvedPromise
//   .then(result => console.log(result)) // Resolves with value 3
//   .catch(error => console.error(error)); // Won't be called in this case
// // 2.Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
// const rejectedPromise = Promise.reject('Boo!');

// rejectedPromise
//   .then(result => console.log(result)) // Won't be called in this case
//   .catch(error => console.error(error)); // Rejects with the string "Boo!"

//🌟Exercise 4: Quizz - Not Mandatory