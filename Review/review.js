// Variables & Datatypes

// A. Q + A
//1. You can assign a value to a variable using the = operator after you have declared it.
//2. We can change the value of a variable by referencing it, followed by using the assignment operator and entering a new value.
//3. We declare the new variable, followed by the assignment operator, follewed by referencing the existing variable
//4. Declare: Variable is registered a given name within the cooresponding; Assign: Assigns a value to a variable; Define: Using a keyword to 'declare" i.e. "function doTest"
//5. Pseudocode is a way of writing programs structured like a set of instructions written out in sentences that just about any human can read and comprehend. 
//6. 95% thinking about how to solve vs 5% actually typing the code

// // B. Strings
// //1. 
//     let firstVariable;
// //2. 
//     firstVariable = 'Hello World';
// //3.
//     firstVariable = 9;
// //4. 
//     let secondVariable = firstVariable;
// //5.
//     secondVariable = 'Goodnight World';
// //6.
//      console.log(firstVariable);
// //7. 
//    let yourName = 'Nate';
//    console.log('Hello, my name is ' + yourName) // Hello, my name is Nate

// // C. Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16; 
// const e = 'Kevin';

// console.log(a != b);
// console.log(c > d);
// console.log('Name' == 'Name');
// // Only use && or || for the next two
// console.log(true || false);
// console.log(false || false && false || false && false || true );
// console.log(false == false);
// console.log(e === 'Kevin');
// console.log(a + b === c);
// console.log(a * a === d);
// console.log(48 =='48');

// // D. The Farm
// //1.
// function farmAnimal(animal){
//     if (animal == 'cow'.toLowerCase) {
//         console.log('moooo');
//     }else {
//         console.log("Hey! You're not a cow.");
//     }
// }
// farmAnimal('dog');

// // E. Driver's Ed
// //1. 
// function canDrive(age) {
//     if (age >= 16) {
//         console.log('Here are the keys!');
//     } else if (age < 16) {
//         console.log("Sorry, you're too young.");
//     } else {
//         console.log('You forgot to enter your age!');
//     }
// }
// canDrive(12);

// // Loops

// // A. The Basics
// //1. 
// for (let index = 0; index <= 10; index++) {
//     console.log(index);
// }
// //2.
// for (let index = 10; index <= 400; index++) {
//     console.log(index);
// }
// //3.
// for (let index = 12; index <= 4000; index += 3) {
//     console.log(index);
// }

// // B. Get even
// //1.
// for (let index = 1; index <= 100; index++) {
//     if(index % 2 === 0) {
//         console.log(index);
//     } else {
//         console.log();
//     }
// }
// //2.
// for (let index = 1; index <= 100; index++) {
//     if(index % 2 === 0) {
//         console.log(index + " is an even number.");
//     } else {
//         console.log(index);
//     }
// }

// // C. Give me Five
// //1.
// for (let index = 0; index <= 100; index++) {
//     if(index % 5 === 0) {
//         console.log('I found a ' + index + ". High five!");
//     }
// }
// //2.
// for (let index = 0; index <= 100; index++) {
//     if(index % 5 === 0) {
//         console.log('I found a ' + index + '. High five!');
//     } else if(index % 3 === 0) {
//         console.log('I found a ' + index + '. Three is a crowd');
//     }
// }
// //3.
// for (let index = 0; index <= 100; index++) {
//     if (index % 5 === 0 && index % 3 ===0) {
//         console.log('I found a ' + index + '. High five! Three is a crowd');
//     } else if(index % 5 === 0) {
//         console.log('I found a ' + index + '. High five!');
//     } else if(index % 3 === 0) {
//         console.log('I found a ' + index + '. Three is a crowd!');
//     }
// }

// D. Savings account
//1.
// let bank_account = 0;
// for (let index = 1; index <= 10; index++) {
//     bank_account += index;
// }
// console.log(bank_account);
//2.
// let bank_account = 0;
// for (let index = 1; index <= 100; index++) {
//     let newAmount = index * 2;
//     bank_account += newAmount;
// }

// console.log(bank_account);

// // Arrays & Control flow

// // A. Talk About it:
// // 1. indexes
// // 2. Yes
// // 3. A shopping list

// // B. Easy Does it
// //1.
// // let quotes = ['Can We Eat?', 'Is it lunch time?', 'Can we eat dinner now?'];

// // C. Accessing elements // const randomThings = [1, 10, "Hello", true]
// //1. 
// randomThings[0];
// //2. 
// randomThings[2] = "World";
// //3.
// console.log(randomThings);

// // D. Change Values // const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// //1.
// ourClass[2];
// //2.
// ourClass[4] = "Octocat";
// //3.
// ourClass.push("Cloud City");

// // E. Mix It Up // const myArray = [5, 10, 500, 20]
// //1.
// myArray.push('Aegon', 'Food');
// //2.
// myArray.shift();
// //3.
// myArray.unshift('Bob Marley');
// //4.
// myArray.pop()
// //5.
// myArray.reverse()
// // Yes, the array was mutated.
// // Mutate means altering the original.
// // Yes, it returned the array reversed.

// // F. Biggie Smalls
// //1.
// let myInteger = 500;
// if(myInteger < 100) {
//     console.log("little number");
// } else {
//     console.log("big number");
// }

// // G. Monkey in the Middle
// function monkey(myInteger){
//     if(myInteger < 5) {
//         console.log("little number");
//     } else if(myInteger > 10) {
//         console.log("big number");
//     } else {
//         console.log('Not my number!');
//     }
// }
// monkey(4);
// monkey(11);
// monkey(8);

// // H. What's in Your Closet
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//         //shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up"
//     ], [
//         //pants
//         "grey jeans",
//         "jeans",
//         "PJs"
//     ], [
//         //accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ]
// //1.
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!"); // right sock
// //2. 
// kristynsCloset.splice(6, 0, "raybans");
// //3.
// kristynsCloset[5] = "stained knit hat";
// //4.
// thomsCloset[0][0];
// //5.
// thomsCloset[1][2];
// //6.
// thomsCloset[2][0];
// //7.
// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][2] + ", " + thomsCloset[2][0] + "!");
// //8.
// thomsCloset[1][2] = "Footie Pajamas"
// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][2] + ", " + thomsCloset[2][0] + "!");

// // Functions
// // A. printGreeting .... skip

// // B. printCool
// const printCool = function(name) {
//     console.log(name + " is cool");
// }
// printCool("Nate");

// // C. calculateCube
// function calculateCube(cubeNumber) {
//     return Math.pow(cubeNumber, 3);
// }
// console.log(calculateCube(5));

// // D. isVowel
// const isVowel = (letter) => {
//     const vowels = ["A", "E", "I", "O", "U"]
//     if(vowels.includes(letter.toUpperCase())) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isVowel('o'));
// console.log(isVowel('n'));

// // E. getTwoLengths
// const getTwoLengths = (string1, string2) => {
//     let output = [];
//     output.push(string1.length, string2.length);
//     return output;
// }
// console.log(getTwoLengths("food", "drinks"));

// // F. getMultipleLengths
// const getMultipleLengths = (stringArray) => {
//     let arrayLs = [];
//     stringArray.forEach(word => arrayLs.push(word.length));
//     return arrayLs;
// }
// console.log(getMultipleLengths(["cookie", "milk", "pepperoni", "fish", "tea"]));

// // G. maxOfThree
// function maxOfThree(num1, num2, num3) {
//     if(num1 >= num2 && num1 >= num3){
//         return num1
//     } else if(num2 >= num3){
//         return num2
//     } else {
//         return num3
//     }

// }
// console.log(maxOfThree(22, 21, 22));

// // H. printLongestWord
// function printLongestWord(arrayString) {
//     let lString = "";
//     for (let index = 0; index < arrayString.length; index++) {
//         if (arrayString[index].length > lString.length) {
//             lString = arrayString[index];
//         }
//     }
//     return lString;
// }
// console.log(printLongestWord(["soda", "pop", "carrot", "fights"]));