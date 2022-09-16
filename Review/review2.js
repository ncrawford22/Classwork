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

// const favMovies = ["Jaws", "The Fellowship of the Ring", "Howl's Moving Castle", "Django Unchained", "Cloud Atlas", "The Usual Suspects", "Toy Story", "Conan the Barbarian", "Titanic", "Harry Potter", "Fried Green Tomatoes", "Volver", "Oculus", "Seven", "Black Panther", "Harry Potter", "Imitation of Life", "Snatch", "Fast and Furious"];

// const findIndexOfMovie = (index) => index === "Titanic";

// console.log(favMovies.findIndex(findIndexOfMovie));
//1.
// favMovies.sort();
// console.log(favMovies);     // Sorts string(s) into alphabetical order
//2.
// favMovies.pop();
//3.
// favMovies.push('Guardians of the Galaxy');
//4.
// favMovies.reverse();
//5.
// favMovies.shift();
//6.
// favMovies.unshift(); // Adds one or more elements to the beginning of the array and returns the new length of the array. Does not return anything, UNLESS something is in the parentheses
//7.
// let findDjango = findI => findI === 'Django Unchained';
// console.log(favMovies.findIndex(findDjango));   // Index of Django is 14

// favMovies.splice(('Django'), 1, 'Avatar'); // No, it does not permanently change our array. Needs to be saved.
//8.
// console.log(favMovies.length); // The Length of the array is: 19 (-1) = to get actual index number (end) / 2 to get the start for slice method
// favMovies.slice(9, 18);
//9.
// const sliceHalf = favMovies.slice(0, Math.ceil(favMovies.length / 2)); // Returns a copy of a section of an array as a new array. Does not permanently change the original array.
//10.
// console.log("Methods Revisted answered: ", favMovies);
// console.log("Methods Revisted answered: ", sliceHalf);
//11.
// let findIndexOfFast = index => index === "Fast and Furious";
// console.log(sliceHalf.findIndex(findIndexOfFast)); // -1
//12.
// Does not matter in this situation because const are mutable. NOw, iff you wanted the array to get reassigned at some point.. you can declare it with let.

// Where is Waldo?
// const whereIsWaldo = [
//                         ["Timmy", "Frank"],
//                     "Eggbert",
//                         ["Lucinda", "Jacc", "Neff", "Snoop"],
//                         ["Petunia", ["Baked Goods", "Waldo"]]];

//                         let removeEggbert = whereIsWaldo.splice([1], 1);
//                         whereIsWaldo[2][2] = "No One"; // changes the 3rd element of the 2nd array to "No One"
//                         console.log(whereIsWaldo[2][1][1]); // returns "Waldo"
//                         console.log(removeEggbert);

// Excited Kitten
// let qoutes = [
// 	" ...human...why are you taking pictures of me?",
// 	" ...the catnip made me do it",
// 	" ...why does the red dot always get away?",
// ];

// let randomQoute = Math.floor(Math.random() * qoutes.length);

// for (let i = 0; i < 20; i++) {
// 	if (i % 2 === 0) {
// 		console.log(qoutes[randomQoute]);
// 	} else {
//         	console.log("love me , pet me! hssssss!");
//     }
// }

// const middle = (arr) => {
//     const mid = Math.floor(arr.length / 2);
//     nums = [...arr].sort((a, b) => a - b);
//     return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
// };
// console.log(middle([1, 2, 3, 4 ,5, 6, 7 ,8, 9, 10, 11]))

// const nums = [
// 	14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
// 	17, 12, 71, 18, 15, 12,
// ];

// nums.sort();
// middleIndex = Math.floor(nums.length / 2);
// console.log(nums[middleIndex]);

// ********** Return of the closets **********

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmellow peeps"
];

// Thom' Closet
const thomsCloset = [
    [
        // Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up"
    ],
    [
        // Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ],
    [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

// console.log(`Krystyn is rocking that ${kristynsCloset[2]} today.`) // (1);

// kristynsCloset.splice(6, 0, 'raybans');  // (2)

// kristynsCloset.splice(5, 1, 'stained knit hat');  // (3)

// let tomsShirt = `${thomsCloset[0][0]}`;  // (4)

// let tomsPants = `${thomsCloset[1][1]}`;  // (5)

// let tomsAccessory = `${thomsCloset[2][2]}`;  // (6)

// console.log(`Thom is looking fierce in ${tomsShirt}, ${tomsPants} and ${tomsAccessory}.`); // (7)

// // change PJs to footie Pajamas
// thomsCloset[1][2] = "Footie Pajamas";  // (8)
// console.log(kristynsCloset);
// console.log(thomsCloset);


// ********** Return of the closets ***********

// Alien Attire
// let kristynsShoe = kristynsCloset[0];
// console.log(thomsCloset[2].push(kristynsShoe));
// console.log(thomsCloset);

// Dress Us up
// console.log(
// 	`Thom is looking fierce in ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}.`
// );

// console.log(
// 	`Thom is looking fierce in ${thomsCloset[0][1]}, ${thomsCloset[1][0]} and ${thomsCloset[2][1]}.`
// );
// console.log(
// 	`Thom is looking fierce in ${thomsCloset[0][2]}, ${thomsCloset[1][2]} and ${thomsCloset[2][0]}.`
// );

// console.log(
// 	`Kristyn is looking fierce in ${kristynsCloset[4]}, ${kristynsCloset[3]} and ${kristynsCloset[5]}.`
// );

// console.log(
// 	`Kristyn is looking fierce in ${kristynsCloset[6]}, ${kristynsCloset[0]} and ${kristynsCloset[2]}.`
// );
// console.log(
// 	`Kristyn is looking fierce in ${kristynsCloset[2]}, ${kristynsCloset[1]} and ${kristynsCloset[0]}.`
// );

// Dirty Laundry
// kristynsCloset.forEach(element => {
//     console.log("WHIRR: now washing " + element);
// });

// Inventory
thomsCloset.forEach(element => {
    console.log(element);
});

