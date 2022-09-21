//Greetings

const express = require('express');

const app = express();

const port = 3000;

const fortune = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

//#1
// app.get('/greeting', (req, res) => {
//     res.send("Hello, stranger");
// })

//#2 & #3
// app.get('/greeting/:name', (req, res) => {
//     res.send('Hello, ' + req.params.name);
// })

// Tip Calculator
//#4 & #5
// app.get('/tip/:total/:tipPercentage', (req, res) => {
//     res.send("Tip calculated is: " + req.params.total * (req.params.tipPercentage / 100));
// });

// Magic 8 Ball 
//#6 - #11
app.get('/magic/:question', (req, res) => {
    let random = ' ' + fortune[Math.floor(Math.random() * fortune.length)]
    res.send(`'<h1> Your question was: ${req.params.question}. Answer: ${random}</h1>'`)
})
















app.listen(port, () => {
    console.log('Listening to Port ' + port);
})