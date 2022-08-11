// // Function declaration / definition | Can be called anywhere (Hoist)

// // function sayHello() {
// //     return 'Hello!';
// // }

// // Function Expression | Can only be called below the blockscope

// const sayHi = function() {
//     return 'Hi!';
// }

// // Arrow Function

// const sayHey = () => 'Hey!';

// console.log(sayHello());
// console.log(sayHi());
// console.log(sayHey());

//  console.log(sayHello(), sayHi(), sayHey());

//  // Parameters/Arguments Parameters are the slots/placeholders for inputs; Arguments are the specific values of the data types

//  function add(num1, num2) { // () list of Parameters
//     // num1 2
//     // num2 3
//     return num1 + num2;
//  }

//  console.log(add(2, 3)); // () list of Arguments
//  console.log(add(5, 2));
//  console.log(add(7, 8));
//  console.log(add(10, 3));

//  function concatenateStrings(string1, string2) {
//     return string1 + string2;
//  }

//  console.log(concatenateStrings('Bob', 'The Builder'));

// Exercise 1

// function computeArea(width, height) {
//     return 'The area of a rectangle with a width of ' + width + ' and a height of ' + height + ' is ' + width * height + ' square units.'
// }

// console.log(computeArea(5, 4))

// Exercise 2

// const planetHasWater = function(planet) {
//     if (planet.toUpperCase() === 'Earth' || 'Mars') {
//         return 'True';
//     }else {
//         return 'False';
//     }
// }

// console.log(planetHasWater('MARS'));

// Exercise 3

const computeArea1 = (width, height) => 'The area of a rectangle with a width of ' + width + ' and a height of ' + height + ' is ' + width * height + ' square units.';

console.log(computeArea1(5, 5))

const planetHasWater1 = (planet1) => (planet1.toUpperCase() === 'Earth' || 'Mars') ? 'True' : 'False';

console.log(planetHasWater1('jupiter'));