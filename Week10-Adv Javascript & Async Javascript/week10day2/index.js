// 🌟 Exercise 1 : Location

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// `I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)`



// 🌟 Exercise 2: Display Student Info
// function displayStudentInfo(objUser) {
//     const { first, last } = objUser;
//     return `Your full name is ${first} ${last}`;
// }
// const result = displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
// console.log(result);



//  🌟Exercise 3: User & Id

// const users = { user1: 18273, user2: 92833, user3: 90315 };
// const usersArray = Object.entries(users);
// console.log(usersArray)
// const modifiedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
// console.log(modifiedUsersArray);



// 🌟Exercise 4 : Person Class

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);
// the output wiil be : object 



// //   🌟 Exercise 5 : Dog Class

// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };
//   Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };

//    // 2
// class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
  
  
//     // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };
  
  
//     // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };





//   🌟 Exercise 6 : Challenges
// 1.Evaluate these (ie True or False)
// [2] === [2] 
// {} === {}
// 2.What is, for each object below, the value of the property number and why?
// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)


//  1.Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …
//  class Animal {
//   constructor(name,type,color){
//       this.name = name;
//       this.type = type;
//       this.color = color;
//   }
//  }
//  class Mammal extends Animal{
//    cry = " oink oink"
//    constructor(name,color){
//      super((name,"Mammal",color))
//    }

//    sound(cry){
//      return `This animal is a ${this.type}. Its name is ${this.name}, its color is ${this.color} and the sound it make is ${cry}`;

//    }
//  }
// const farmerCow = new Mammal("ben", "white");
// console.log("farmerCow:", farmerCow );