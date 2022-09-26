// Load express
const express = require('express');

// Load our fruits data
const fruits = require('../models/fruits')

// Create a special router object for our routes
const router = express.Router();

 // Setup our "root" route

//  router.get('/', (req, res) => {
//     res.send('<h1>Hello Fruits</h1>');
// });

// Setup "index" routes
router.get('/', (req, res) => {
    // res.send(fruits);
    res.render('fruits/Index', {fruits: fruits});
});

// Setup "new" route
router.get('/new', (req, res) => {
    // res.send('<form>Create fruit</form>');
    res.render('fruits/New');
});

// Setup "create" route
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    // console.log(fruits);
    // res.send('Creating a fruit... (in the DB)');
    res.redirect('/fruits');
});
// ?name=apple&color=red&readyToEat=value

// Setup "show" route
router.get('/:index', (req, res) => {
    // res.send(fruits[req.params.index]);
    res.render('fruits/Show', {fruit: fruits[req.params.index]});
});

// Setup "edit" route
router.get('/:index/Edit', (req, res) => {
    res.render('fruits/Edit', {fruit: fruits[req.params.index]});
});

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a new fruit at index! (in Database)');
});

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a fruit at index! (in Database)');
});

// router.get('/', (req, res) => {
//     const color = req.query.color;
//     const readyToEat = req.query.readyToEat == 'true' ? true : false;

//     if (req.query.color || req.query.readyToEat) {
//         const readyFilter = fruits.filter(fruit => fruit.readyToEat == readyToEat);
//         const colorFilter = fruits.filter(fruit => fruit.color == color);
//         if (req.query.color) {
//             res.send(colorFilter)
//         } else if (req.query.readyToEat) {
//             res.send(readyFilter);
//         } else {
//             res.send("That fruit is not available!");
//         }
//     } else {
//         res.send(fruits);
//     }
// })

// router.get('/', (req, res) => {
//     quality = req.query.quality
//     if (quality == 'good'){
//         yes = fruits.filter(fruit => fruit.readyToEat === true)
//         res.send(yes)
//     } else if (quality == 'bad'){
//         no = fruits.filter(fruit => fruit.readyToEat === false)
//         res.send(no)
//     } else{
//         res.send(fruits)
//     }
// })

module.exports = router;