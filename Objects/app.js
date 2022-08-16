/* Objects - Object Oriented Programming (OOP)
- Objects are a collection of zero or more properties
- A property consist of a key: value pair where the:
  - Key is a string (JS coereturnedChangeion automatically)
    - Like an index in an array but has a name and it is unique
  - Value is any JS expression
= Objects are also a data structure
*/

// object literal 
// let cat = {
//     name: 'Mr. Bean',
//     fur: 'grey, black, and white',
//     legs: 4,
//     age: 3,
//     favoriteThings: ['yarn', 'string', 'food'],
//     canSpeakFrench: false,
//     solveRubikesCube: false
// }

// const cat = {
//     name: 'Mr. Bean',
//     fur: 'grey, black, and white',
//     legs: 4,
//     age: 3,
//     favoriteThings: ['yarn', 'string', 'food'],
//     canSpeakFrench: false,
//     solveRubikesCube: false,
//     meow: function() {  // Methods
//         console.log('meow');
//     },
//     purr: () => {
//         console.log('purr');
//     },
//     talk(speech) {
//         console.log(speech);
//     }
// }

//Access a property with dot notation
// console.log(cat.name);
// console.log(cat.fur);
// console.log(cat.legs);

// We can also acess properties with brackets
// console.log(cat['name']);
// console.log(cat['fur']);
// console.log(cat['legs']);

// let propName = 'fur';
// console.log(cat[propName]);

// console.log(cat);

//Add/Create an object property

// cat.breed = 'Calico';

// console.log(cat);

// cat.temperament = 'mild';

// console.log(cat);

//Change Object Properties
// cat.temperament = 'angry';

// console.log (cat);

// console.log(cat.favoriteThings[1]);

// cat = 'nothing';

// console.log(cat);

// if (cat.canSpeakFrench === true) {
//     console.log('oui');
// } else {
//     console.log('no');
// }

// for (let i = 0; i < cat.legs; i++) {
//     console.log('LEG');
// }

// console.log('Does my cat have legs???');
// if (cat.science) {  // undefined
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// function ... how do we run it again?
// cat.meow(); 
// cat.purr();
// cat.talk('Feed Me!');

// arr.forEach()
// arr.map()
// arr.filter()
// arr.reduce()

// Extra Things

// For .. of is for arrays

// for (let item of arr) {

// }

// For .. in loop is for objects
// for (let prop in cat) {
//     console.log(prop);
//     console.log(cat[prop]);
// }

// for (let key in cat) {
//     // key represents ... fur, name, legs, age, meow, purr, talk
//     console.log('Key: ', key); // key is a string value
//     console.log('Value: ', cat[key]); // gives us the value
//     console.log();
// }

// const bird = {
//     name: 'Dr. Soda',
//     age: 8,
//     weight: '5lbs',
//     churp: function(churps) {
//         console.log(churps);
//     },
//     eggs(number) {
//         console.log(number)
//     }
// }

// console.log(bird);
// bird.churp('Churrrp!');
// bird.eggs(8);

// const fish = {
//     species: 'Clownfish',
//     speed: 'fast',
//     food: 'pellets',
//     color: (whatColor) => {
//         console.log(whatColor);
//     },
//     age: function(ageOfFish) {
//         console.log(ageOfFish);
//     }
// }

// console.log(fish)
// fish.color('purple');
// fish.age(5);

// Object Exercises
// 1.
// function charReturned(string) {
//     let object1 = {}; 
//     for (let index = 0; index < string.length; index++) {
//         if (string[index] in object1) {
//             object1[string[index]]++;
//         } else {
//             object1[string[index]] = 1;
//         }
//     }
//     return object1;
// }
// console.log(charReturned('hello'));

//2.

// function change(paid, cost) {
//     paid *= 100;
//     cost *= 100;
    
//     let returnedChange = {
//         hundred: 0,
//         fifty: 0,
//         twenty: 0,
//         ten: 0, 
//         five: 0,
//         one: 0,
//         quarter: 0,
//         dime: 0,
//         nickel: 0,
//         penny: 0,
//     }
//     while (paid > cost) {
//         if (paid >= cost + 10000) {
//             paid-= 10000;
//             returnedChange.hundred++
//         } else if (paid >= cost + 5000) {
//             paid-= 5000;
//             returnedChange.fifty++;
//         } else if (paid >= cost + 2000) {
//             paid-= 2000;
//             returnedChange.twenty++;
//         } else if (paid >= cost + 1000) {
//             paid-= 1000;
//             returnedChange.ten++;
//         } else if (paid >= cost + 500) {
//             paid-= 50;
//             returnedChange.five++;
//         } else if (paid >= cost + 100) {
//             paid-= 100;
//             returnedChange.one++;
//         } else if (paid >= cost + 25) {
//             paid-= 25;
//             returnedChange.quarter++;
//         } else if (paid >= cost + 10) {
//             paid-= 10;
//             returnedChange.dime++;
//         } else if (paid >= cost + 5) {
//             paid-= 5;
//             returnedChange.nickel++;
//         }  else if (paid >= cost + 1) {
//             paid--;
//             returnedChange.penny++;
//         }     
//     }
//     return (returnedChange);
// }

// console.log(change(300, 190));

// const cat = {
//     name: 'Mr. Bean',
//     legs: 4,
//     type: 'Feline',
//     friends: [
//         {
//             name: 'Georgey',
//             legs: 4,
//             type: 'Feline'
//         },
//         {
//             name: 'Snake',
//             legs: 3,
//             type: 'Feline'
//         },
//         {
//             name: 'Rixio',
//             legs: 5,
//             buddies: [
//                 {
//                     name: 'Arthur',
//                     fins: 5,
//                     type: 'fish'
//                 },
//                 {
//                     name: 'Hannibal',
//                     type: 'Platypus'
//                 }
//             ]
//         }
//     ]
// }

// // How do we access the nested values?

// //1. How do we access the string 'Snake'?
//     console.log(cat.friends[1].name);
// //2. How do we access the string 'Rixio'?
//     console.log(cat.friends[2].name);
// //3. How do we access the fins property?
//     console.log(cat.friends[2].buddies[0].fins);
// //3. How do we find the y in platypus?
//     console.log(cat.friends[2].buddies[1].type[4]);