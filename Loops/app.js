// Inside parenthesis we have 3 statements!

// Statement 1: Declare and initialize a value for the loop. Scoped to the For Loop

//Statement 2: A condition that when true runs the code in the For loop

//Statement 3: Incrementing of the variable in order to evenutually break the loop.

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// 1. Declare and initialize variable
// 2. Check if condition is true
// 3. Console log runs and prints value (0)
// 4. The variable i increments from 0 to 1
// 5. Repeat Step 2
// 6. Repeat Step 3
// 7. Repeat Step 4
// .. 

//Exercise 1
// for (i = 10; i > 0; i--) {
//     console.log(i);
// }

//Exercise 2

// for (i = 1; i <= 10; i+=2) {
    
//     console.log(i);
    
// }

// for (i = 2; i <=10; i+=2){
//     console.log(i);
// }

//Exercise 3
// for (i = 6; i <= 60; i += 3){
//     console.log(i);
// }

//Exercise 4
// let string = "";
// for (i = 1; i <= 7; i++) {
//     string += "#";
//     console.log(string);

// }

// // Method 2

// for (let i = 1; i <= 7; i++){
//     string = "#";
//     console.log(string.repeat( i ));
// }

//Exercise 5

// for ( i = 0; i <= 10; i++){
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

//Excercise 6

// for (i = 1; i <= 20; i++) {
//     if (i == 1 || i == 3) {
//         console.log (i + ' Odd');
//     }else if (i == 2) {
//         console.log(i + ' Even');
//     }else {
//         if (i % 2 == 0) {
//             console.log(i + ' Even');
//         }else if (i % 3 == 0) {
//             console.log(i + ' Odd');
//         }
//     }
// }

//While Loops Exercise

//Exercise 1

// let i = 0;
// while ( i < 35) {
//     if (i % 3 === 0){
//     console.log(i);
//     }
//     i++;
// }

// let i = 0;
// while (i < 35) {
//     console.log(i)
//     i = i + 3;
// }

//Exercise 2

// let i = 0;
// while (i < 100) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// let i = 5;
// while (i  < 100) {
//     console.log(i);
//     i = i + 5;
// }

//Exercise 3

// let i = 0;
// while (i <= 20) {
//     if (i % 2 == 0) {
//         console.log(i * 3);
//     }
//     i ++;
// }

// let i = 0;
// while (i < 20) {
//     if (i % 2 == 0) {
//         i = i *3;
//         console.log(i);
//     }
// }

//Exercise 4

// let num = 2;
// let prime = 0;
// let num2 = 0;
// while (num <= 20) {
//     prime = num - 1;
//     while (prime > 1){
//         if (num % prime == 0){
//             num2++;
//         }
//         prime--;
//     }
//     if (num2==0){
//         console.log(num);
//     }
//     num2 = 0;
//     num++;
// }



//Bonus Logical #1

// let num = 10;
// let qcount = 0;
// while(num > 4){
//     qcount += 4;
//     num--;
// }

// console.log("Nando received " + qcount + " quarters in return.");

//Bonus Logical #2 - Needs to output: 10, 30, 50, 70, 90 20, 40, 60, 80 100

// let num = 10
// while (num <= 100) {
//   console.log(num)
//   num += 20
//   if (num === 90) {
//     console.log(num)
//     num = 20
//   }
// }

//Bonus Logical #3
// let num = 500
// while (num <= 800) {
//   if (num % 4 === 0) {
//     console.log(num)
//   }
//   num++
// }

//Extra Exercise - Nest Loops

/*
    1: Initialize i to 1
    2: Checks if i (1) is less than or equal to 3
    3: Initialize the variable str as a blank string
    4: Initialize j to 1
    5: Checks if j (1) is less than or equal to i
    6: Concatenates 1 as a string to the variable str ("1")
    7: Increment j by 1 (2)
    8: Checks if j (2) is less than or equal to i (1) (False)
    9: Print s variable (1)
    10: Increment i by 1 (2)
    11: Checks if i (2) is less than or equal to 3 (true)
    12: Initialize the variable str as a blank string
    13: Initializes j to 1
    14: Checks if j (1) is less than or equal to i (2) (true)
    15: Concatenates 2 as a string to the variable str ("1")
    16: Increment j by 1 (2)
    17: Checks if j (2) is less than or equal to i (2) (true)
    18: Concatenates 2 as a string to the variable s ("12")
    19: Increment j by 1 (3)
    20: Check if j (3) is less than or equal to i (2) (false)
    21: Print str variable ("12")
    22: Increment i by 1 (3)
    23: Checks if i (3) is less than or equal to 3 (true)
    24: Initilizes the variable str as a blank string
    25: Initializes j to 1
    26: Check if j (1) is less than or equal to i (3) (true)
    27: Concatenates 1 as a string to the variable str ("1")
    28: Increment j by 1 (2)
    29: Checks if j (2) is less than or equal to i (3) (true)
    30: Concatenate 2 as a string to the variable str ("12")
    31: Increment j by 1 (3)
    32: Checks if j (3) is less than or equal to i (3) (true)
    33: Concatenates 3 as a string to the variable str ("123")
    34: Increment j by 1 (4)
    35: Check if j (4) is less than or equal to (3) (false)
    36: Prints str variable ("123")
    37: Increments i by 1 (4)
    38: Checks if i (4) is less than or equal to 3 (false)
    39: End (Lunch Time!)
*/
for (let i = 1; i <= 3; i++) {
     let str = '';
    for (let j = 1; j <= i; j++) {
        str += j;
    }
    console.log(str);
}