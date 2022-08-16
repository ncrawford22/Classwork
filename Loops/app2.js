// let foods = ['kimchi', 'tacos', 'arepa', 'spam']
// // for loops
// // for (let i = 0; i < food.length; i++)
// // while loops
// // while (i < food.length)
// // for of 
// // for (let item of foods)
// // forEach (build-in array method)
// // foods.forEach(() => { })
// // anonymous function
// // () => 
// // function() { }
// // callback functions
// // filter (built-in array method)
// let newFoodsArr = foods.filter((item, idx) => {
//     // if you return true
//     // keep the item
//     // if you return false
//     // discard it
//     if (item[0] === 'k' || item[0] === 's') {
//         return true
//     } else {
//         return false
//     }
// })
// // console.log(foods)
// // console.log(newFoodsArr)
// // map (built-in array method)
// let brandNewArray = foods.map(function(item, idx) {
//     // change the current item 
//     return item + '!'
// })
// // console.log(brandNewArray)
// let nums = [4, 10, 25, 30, 100]
// // reduce (built-in array method)
// let result = nums.reduce((previousValue, currentValue) => {
//     return currentValue + previousValue
// }, 0)
// console.log(result)
// Collapse

//FizzBuzz
// function fizzBuzz (number) {
//     for (let i = 1; i < number; i++) {
//         if((i % 3 == 0) && (i % 5 === 0)) {
//             console.log("FizzBuzz");
//         } else if( i % 5 == 0) {
//             console.log("Fizz");
//         } else if( i % 3 == 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i);
//         }
//     }
// }
//  console.log(fizzBuzz(50));

//  // Method 2
//  const fizzBuzz = function(number) {
//     for (let i = 1; i < number; i++) {
//         if((i % 3 == 0) && (i % 5 === 0)) {
//             console.log("FizzBuzz");
//         } else if( i % 5 == 0) {
//             console.log("Fizz");
//         } else if( i % 3 == 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i);
//         }
//     }
// }
//  console.log(fizzBuzz(50));


//Nando's Cookies

// let paid = 10;
// let qcount = 0;
// while(paid > 4){
//     qcount += 4;
//     paid--;
// }

// console.log("Nando received " + qcount + " quarters in return.");

// function changeReturned(cost, paid) {
//     return (paid - cost) * 4;
// }
// console.log("You received " + changeReturned(2, 4) + " quarters!");

function change(num, cost) {
    num *= 100;
    cost *= 100;
    //rC stands for returned Change
    let rC = [0,0,0,0,0,0,0,0,0];

    while (num > cost) {
        if (num >= cost + 5000) {
            num-= 5000;
            rC[0] ++;
        } else if (num >= cost + 2000) {
            num-= 2000;
            rC[1] ++;
        } else if (num >= cost + 1000) {
            num-= 1000;
            rC[2] ++;
        } else if (num >= cost + 500) {
            num-= 50;
            rC[3] ++;
        } else if (num >= cost + 100) {
            num-= 100;
            rC[4] ++;
        } else if (num >= cost + 25) {
            num-= 25;
            rC[5] ++;
        } else if (num >= cost + 10) {
            num-= 10;
            rC[6] ++;
        } else if (num >= cost + 5) {
            num-= 5;
            rC[7] ++;
        }  else if (num >= cost + 1) {
            num--;
            rC[8] ++;
        }     
    }
    console.log(rC);
    return ("You will get back " + rC[0] + " fifty dollar bills, " + rC[1] + 
        " twenty dollar bills, " + rC[2] + " ten dollar bills, " + rC[3] + " five dollar bills, " 
        + rC[4] + " one dollar bills, " + rC[5] + " quarters, " + rC[6] + " dimes, " + rC[7] + " nickels, and " + rC[8] + " pennies.");
}
console.log(change(100, 55));
