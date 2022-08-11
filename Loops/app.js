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

//Exercise 2

// let i = 0;
// while (i < 100) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
//     i++;
// }

//Exercise 3

let i = 0;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i * 3);
    }
    i ++;
}

//Exercise 4

