// JavaScript Reps

// Easy Going

//1. 
// for (let i= 1; i <= 20; i++) {
//     console.log("Easy Going answered: ", i);
// }

// Get Even

//1.
// for (let i = 0; i <= 200; i+=2) {
//     console.log("Get Even answered: ", i);
// }

// Fizz Buzz

// function numTo100(number) {
//     for(let i = 0; i <= 100; i++){
//         if (i % 5 === 0 && i % 3 === 0){
//             console.log("Fizz Buzz answered: FizzBuzz");
//         }
//         if (i % 3 === 0){
//             console.log("Fizz Buzz answered: Fizz");
//         }
//         if (i % 5 === 0){
//             console.log("Fizz Buzz answered: Buzz");
//         }
//         if (i % 5 != 0 && i % 3 != 0){
//             console.log("Fizz Buzz answered: ", i);
//         }
//     }
// }

// numTo100(55);

//Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant", 5000, "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-to"]
// const dart = ["D'art", "Demogorgan Dog", 2, "Upside Down"]

//1.
// plantee[2]++;
// console.log(plantee);

//2.
// wolfy[3] = "Gotham City";
// console.log(wolfy);

//3.
// dart.push("Hawkins");
// console.log(dart);

//4.
// wolfy.shift();
// wolfy.unshift('Gameboy')
// console.log(wolfy);

// Yell at the Ninja Turtles

//1.
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (let turtles of ninjaTurtles) {
//     console.log("Yell at the Ninja Turtles answered: ", turtles.toUpperCase());
// }

// Methods Revisited

const favMovies = ["Jaws", "The Fellowship of the Ring", "Howl's Moving Castle", "Django Unchained", "Cloud Atlas", "The Usual Suspects", "Toy Story", "Conan the Barbarian", "Titanic", "Harry Potter", "Fried Green Tomatoes", "Volver", "Oculus", "Seven", "Black Panther", "Harry Potter", "Imitation of Life", "Snatch", "Fast and Furious"];

const findIndexOfMovie = (index) => index === "Titanic";

// console.log(favMovies.findIndex(findIndexOfMovie));
//1.
favMovies.sort();
// console.log(favMovies);     // Sorts string(s) into alphabetical order
//2.
favMovies.pop();
//3.
favMovies.push('Guardians of the Galaxy');
//4.
favMovies.reverse();
//5.
favMovies.shift();
//6.
favMovies.unshift(); // Adds one or more elements to the beginning of the array and returns the new length of the array. Does not return anything, UNLESS something is in the parentheses
//7.
let findDjango = findI => findI === 'Django Unchained';
// console.log(favMovies.findIndex(findDjango));   // Index of Django is 14

favMovies.splice(('Django'), 1, 'Avatar'); // No, it does not permanently change our array. Needs to be saved.
//8.
// console.log(favMovies.length); // The Length of the array is: 19 (-1) = to get actual index number (end) / 2 to get the start for slice method
// favMovies.slice(9, 18);
//9.
const sliceHalf = favMovies.slice(0, Math.ceil(favMovies.length / 2)); // Returns a copy of a section of an array as a new array. Does not permanently change the original array.
//10.
console.log("Methods Revisted answered: ", favMovies);
console.log("Methods Revisted answered: ", sliceHalf);
//11.
let findIndexOfFast = index => index === "Fast and Furious";
console.log(sliceHalf.findIndex(findIndexOfFast)); // -1
//12.
// Does not matter in this situation because const are mutable. NOw, iff you wanted the array to get reassigned at some point.. you can declare it with let.



