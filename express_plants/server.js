// Load Express
const express = require('express');
const port = 3000;

// Create the app
const app = express();
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"];

//Define route (when ready)
// app.get('/:indexOfPlantsArray', (req, res) => {
//     res.send(plants[req.params.indexOfPlantsArray]);
// });

app.get('/:indexOfPlantsArray', (req, res) => {
    if (plants[req.params.indexOfPlantsArray]) {
        res.send(plants[req.params.indexOfPlantsArray]);
    } else {
        res.send(`Cannot find anything at index ${req.params.indexOfPlantsArray} of the Plants Array..`);
    }
});

// Example w/multiple params
app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params)
    res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

// Listen to Port
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});

// req.query
// Example with req.query

app.get('/howdy/:firstName', (req, res) => {
    console.log(req.params, ': parameters');
    console.log(req.query, ': queries');
    res.send('Testing...');
})