//Greetings

const express = require('express');

const app = express();

const port = 3000;

const array = 

//#1
// app.get('/greeting', (req, res) => {
//     res.send("Hello, stranger");
// })

//#2 & #3
// app.get('/greeting/:name', (req, res) => {
//     res.send('Hello, ' + req.params.name);
// })

// Tip Calculator
//#4
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send("Tip calculated is: " + req.params.total * (req.params.tipPercentage / 100));
})














app.listen(port, () => {
    console.log('Listening to Port ' + port);
})