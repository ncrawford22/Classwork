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

// let num = 10;
// let qcount = 0;
// while(num > 4){
//     qcount += 4;
//     num--;
// }

// console.log("Nando received " + qcount + " quarters in return.");

function changeReturned(cost, paid) {
    return (paid - cost) * 4;
}
console.log("You received " + changeReturned(2, 4) + " quarters!");

 