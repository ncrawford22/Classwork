// map
// filter
// forEach

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// array methods take a callback function as an argument
// callback are functions that will run at a later time
// example of a forEach array method: nums.forEach()

// Every method
// if every element/value is greater than zero, return true
let test = nums.every(callbackFn); // -> returns true or false (Store)
// console.log(nums.every(callbackFn)); Does not store, just logs to console.

// creating our very own callback funtion!
function callbackFn(element) {
    // return element >= 0;
   if (element >= 0) {
    return true;
   } else {
    return false;
   }
}

console.log('The result of our every method check is... ', test);

// MDN Docs example of a callback: const isBelowThreshold = (currentValue) => currentValue < 40;

let test2 = panagram.every(myCallback);

function myCallback(element) {
    // return element.length < 8;
    if (element.length < 8) {
        return true;
    } else {
        return false;
    }
}

console.log('The result of our every method check is... ', test2);

// Filter method
const filteredNums = nums.filter(num => num < 4);

console.log('These were the filtered numbers: ', filteredNums);


// function filteredWrds(letters) {
//     if (letters.length % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const filteredWords = panagram.filter(filteredWrds);

const filteredWords = panagram.filter(ltrs => ltrs.length % 2);

console.log('These were the filterd words: ', filteredWords);

// Find array method

let foundElement = nums.find((element) => element % 5 === 0); // return the first value matching this condition

console.log('We found a number divisble by 5, which is... ', foundElement);

let firstCharacter = panagram.find((element) => element.length >= 5);

console.log('We found a word longer than 5 characters, which is... ', firstCharacter);

// Find index method

const isDivisibleBy3 = (element) => element % 3 === 0;

console.log('The index of the first number divisble by 3 is: ', nums.findIndex(isDivisibleBy3));

const isLessThan2Chars = (element) => element.length < 2;

console.log('The index of the first word that is less than 2 characters long is: ', panagram.findIndex(isLessThan2Chars)); // -1 because its not available

// For Each <--- No return value

//This will log every number multiplied by 3
nums.forEach(number => console.log(number * 3));

// This will log every word with an exclamation point!
panagram.forEach((word => console.log(word + '!')))

// Map

const numMap = nums.map(num => num * 100);
console.log(numMap);

const wordMap = panagram.map( words => words.toUpperCase());
console.log(wordMap);

// Some

const isDivisibleby7 = (number) => number % 7 === 0;
console.log(nums.some(isDivisibleby7));

const someA = (words) => words.toLowerCase()