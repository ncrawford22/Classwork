// const fs = require('fs');
// console.log(fs);

// fs.writeFile('./hello.txt', 'Hello!', function() {
//     console.log("Successfully created this file!");
// })

// Load the "days-of-week" module

let daysOfWeek = require('./days-of-week');

console.log(daysOfWeek);

// console.log(daysOfWeek.getWeekday(0));

// let request = require('request');

// request(
//     'http://jsonplaceholder.typicode.com/users', (err, res, body) => {
//         console.log(body);
//     }
// )

const random = require('./utilities/random');
for (let i = 0; i < 10; i++) {
    console.log("Random number: " + random(100, 200));
}

const circle = require('./utilities/circle');
console.log("Area: " + circle.area(10));
console.log("Circumference: " + circle.circumference(10));