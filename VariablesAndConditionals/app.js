
// // Bad! (not really!) (Hoisting)
// var age;

// // Good!
// let age1;

// // Constant
// const age2 = 8;

// // Data Types

// // Number
// const age3 = 10;

// // Strings
// const name = "Nate";
// const name2 = 'Nate';
// const name3 = `Nate`;

// // Boolean
// const employed = true;

// // Undefined - situations for when value is expected
// const example = undefined;

// // Null - situations for when no value is expected
// const example2 = null;

// // String Operator
// let firstName = "Bob";
// let lastName = "The Builder";

// // Concatenation
// let fullName = firstName + lastName;
// let concatenation = "con" + "cat" + "ena" + "nation";

// console.log(concatenation);

// // Camel Case
// // myFavoriteDessert

// // Pascel Case
// // MyFavoriteDessert

// // Kebab Case
// // my-favorite-dessert

// // Logical Operators
// // AND &&
// // OR ||
// // Not !

// // Shorthands

// let fire = 0;

// fire -= 10;
// // fire = fire - 10;

// fire-- // decrementing by 1
// // fire = fire - 1;

// fire++ // incrementing by 1
// //fire = fire + 1;

// fire = fire - 10;

// console.log(fire);

// // Loose Comparison (Uses Type Coercion)
// // == (2 equal signs)
// // Only checks for value; Converts if they are not same type

// // Strict Comparison
// // === (3 equal signs)
// // Look for Value and Data type to be same; No conversion

// // Assignment Operator
// // = (1 equal sign)

// let x = 6;
// let y = 3;

// console.log(!(x == y)); // True

// let num1 = 2;
// let num2 = 4;
// let num3 = num1 + num2;

// console.log(num3);

// let num4 = 5;
// let num5 = 10;
// let num6 = 12;
// let num7 = 15;
// let num8 = num4 - num5 + num6 - num7;

// console.log(num8);

// let num9 = 3;
// let num10 = 6;
// let num11 = 9;
// let num12 = 12;
// let num13 = 15;
// let num14 = 18;
// let num15 = 21;
// let num16 = 24;
// let num17 = 27;
// let num18 = 30;
// let avg1 = (num9 + num10 + num11 + num12 + num13) /5;
// let avg2 = (num14 + num15 +num16 + num17 + num18) /5;
// let avg3 = (avg1 + avg2) /2;

// console.log(avg1);
// console.log(avg2);
// console.log(avg3);

// let cool = (4 + 10 + 22 -30 + 55) /5;


// console.log(cool);

// let hot = (68 + 7 -22 + 9 + 100) /5;

// console.log(hot);

// let warm = (cool + hot) /2;

// console.log(warm);

// let box1 = "Hello";
// let box2 = "World";
// let tempBox;

// tempBox = box1; //Hello
// console.log("tempBox is now " + tempBox);
// box1 = box2; //World
// console.log("box1 is now " + box1);
// box2 = tempBox; //Hello
// console.log("box2 is now " + box2);

// console.log(box2, box1);

// let number = 1;

// if (number == 1) {

//     console.log('True');
// } else if (number == 2){
//     console.log('False');
// } else if (number == 3) {
//     console.log('hi');
// } else if (number == 4){
//     console.log('No');
// }else {
//     console.log('The End');
// }

// let num = 1;

// if (num >= 1){
//     console.log('It is positive!');
// } else if (num < 0) {
//     console.log('It is negative!');
// } else {
//     console.log('What is your number?');
// }

// let age = 17;

// if (age >= 18) {
//     console.log('Welcome to the New Site!');
// }else if (age < 18) {
//     console.log('Access Denied!');
// }

// let num = 99;

// if (num >= 0 ) {
    
//     if (num > 100) {

//         console.log('Im positive and greater than 100!')
//     }

//     else if (num >= 0 && num < 100){
//         console.log('Positive but less than 100');
//     }
// } else {
//     console.log('Im definitely negative');
// }


// let grade = 100;

// if (grade >= 59) {
//     if (grade >= 90) {
//         console.log('A');
//     } else if (grade >= 80) {
//         console.log('B');
//     } else if (grade >= 70) {
//         console.log('C');
//     } else {
//         console.log('D');
//     }
// } else {
//     console.log('F');
// }

// Switch Statement

// let number = 4;

// switch (number) {
//     case 1:
//         console.log('inside of case 1');
//         break;
//     case 2: 
//         console.log('inside of case 2');
//         break;
//     case 3:
//         console.log('inside of case 3');
//         break;
//     default:
//         console.log('Do something else!');
//         break;
// }

// Ternary Operator (Three parts)

// let lighting = 'cloudy';

// let dayOrNight = lighting === 'dark' ? 'night time' : lighting === 'cloudy' ? 'overcast' :'day time'; // 'night time'

// console.log(dayOrNight);

// let lighting = "light";
// let dayOrNight;

// if (lighting === 'dark') {
//     dayOrNight = 'night time';
// } else if (lighting === 'cloudy') {
//     dayOrNight = 'overcast';
// } else {
//     dayOrNight = 'day time';
// }

//Switch Statement Exercise

let letter = "A";

switch (letter) {
    case "A", "E", "I", "O", "U", "Y" :
        console.log ("This is a vowel!");
        break;
    default:
        console.log('This a consonant!');
        break;
}

// Ternary Operator Exercise

let num = -1;

let result1 = num > 0 ? 'Positive': num < 0 ? 'Negative': 'neither positive or negetive'
console.log(result1);