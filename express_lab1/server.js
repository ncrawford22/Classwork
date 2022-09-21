//Greetings

const express = require('express');

const app = express();

const port = 3000;

//#1
// app.get('/greeting', (req, res) => {
//     res.send("Hello, stranger");
// })

//#2 & #3
// app.get('/greeting/:name', (req, res) => {
//     res.send('Hello, ' + req.params.name);
// })















app.listen(port, () => {
    console.log('Listening to Port ' + port);
})