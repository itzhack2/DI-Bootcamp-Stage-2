// Exercise 1 : Analyzing

// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
//Anser['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// ------2------
// const country = "USA";
// console.log([...country]);
// Anser['U', 'S', 'A']
// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// Anser[undefined, undefined]

// 🌟 Exercise 2 : Employees

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// // 1.Using the map() 
// const welcomeStudents = users.map((user) => "Hello " + user.firstName); 
// console.log(welcomeStudents);

// // 2.Using the filter()
// const fullStackStudents = users.filter(user=>user.role === 'Full Stack Resident')
// console.log("fullStackStudents",fullStackStudents);

// // 3.Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
// const lastNameOffFullStackResident = users
// .filter(user=>user.role === 'Full Stack Resident')
// .map((user)=> user.lastName);
// console.log("lastNameOffFullStackResident",lastNameOffFullStackResident);


// 🌟 Exercise 3 : Star Wars

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// // 1.Use the reduce()
// const sentence = epic.reduce((total, current)=>(total += current + " "), " ");
// console.log("sentence",sentence);

// 🌟 Exercise 4 : Employees #2

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// // 1.Using the filter()               
// // 2.Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
// students.filter((student)=> student.isPassed)
// .forEach((student)=> {
//     console.log(`congratulations ${student.name},you passed the course in ${student.course}`);
// });