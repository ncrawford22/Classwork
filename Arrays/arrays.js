// ARRAYS
// Indexes:     0     1      2

// let learners = ['Nathan', 'Jade', 'Ronald']
// learners[0]

// console.log(learners.length);
// console.log(learners)

// Push Method - Adds to the End of array

// learners.push('4')

// console.log(learners);

// POP Method - Removes from the End of array

// learners.pop()
// console.log(learners)

// SHIFT Method - Removes from the Beginning of array

// learners.shift();
// console.log(learners);

// UNSHIFT Method - Adds to the Beginning of the array

// learners.unshift('Nate');
// console.log(learners);

// Indexes
// let learners = ['Nathan', 'Krisy', 'Ronald'];
// let learners2 = ['Jade', 'Rixio', 'Teo'];

// Spread Operator

// let everybody = [...learners, ...learners2];

// Rest Parameters

// function add(...numbers) {

// First index is always 0
// Last index is always length of array - 1

//  1  2  3   4   5    6
// [4, 5, 6, 10, 100, 50]            7
//     for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]);
//     }
// }

// add(4, 5, 6, 10, 100, 50, 60, 70, 10);

// Function & Arrays Lab

// 1.

// function maxOfTwoNumbers(num1, num2) {

//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }

// }

// console.log(maxOfTwoNumbers(20, 20))

//2.

// const maxOfThree = function(num1, num2, num3) {

//     if (num1 > num2 && num1 > num3){
//         return num1;
//     } else if (num2 > num1 && num2 > num3) {
//         return num2;
//     }else {
//         return num3;
//     }
// }
// console.log(maxOfThree(51, 51, 51))

//3.
// function isCharAVowel(char) {
//     if (char.toUpperCase() == "A" || char.toUpperCase() == "E" || char.toUpperCase() == "I" || char.toUpperCase() == "O" || char.toUpperCase() == "U" || char.toUpperCase() == "Y") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log (isCharAVowel("a"));
// console.log (isCharAVowel("x"));

//4.
// const sumArray = function(...numbers) {
//     let sum = 0;
//     for (let index = 0; index < numbers.length; index++) {
//         sum  += numbers[index];

//     }
//     return sum;
// }
// console.log(sumArray(12, 10, 20, 30));

//5.
// function multiplyArray(...numbers) {
//     let product = 1;
//     for (let index = 0; index < numbers.length; index++) {
//         product *= numbers[index];
//     }
//     return product;
// }
// console.log(multiplyArray(12, 10, 10))

//6.
// const numArgs = function(...nums) {
//     let arguments = 1;
//     for (let index = 0; index < nums.length; index++) {
//         arguments = nums.length;
//     }
//     return arguments;
// }

// Version 2
// const numArgs = function(...args) {
//     return args.length;
// }

// console.log(numArgs(1, 2, 3, 4, 5, 6, 10, 11, 12, 13));

//7.
// function reverseString(string) {
//     let stringNew = "";
//     for (let index = string.length - 1; index >= 0; index--) {
//         stringNew += string[index];
//     }
//     return stringNew;

// }
// console.log(reverseString("Goodbye"));

//8.
const longestStringInArray = function (strings) {
    let stringL = strings[0].length
    for (let index = 0; index < strings.length; index++) {
      if (strings[index].length > stringL) {
        stringL = strings[index].length;
      }
    }
  
    return stringL;
  }
  
  console.log( longestStringInArray(['The', 'Dallas','Cowboys']));

//9.
// function stringsLongerThan(strings, number) {
//     let stringL = [];
//     for (let index = 0; index < strings.length; index++) {
//         if (strings[index].length > number) {
//             stringL.push(strings[index]);
//         }
//     }
//     return stringL;
// }
// console.log(stringsLongerThan(["Say", "hello", "in", "the", "morning"], 3));