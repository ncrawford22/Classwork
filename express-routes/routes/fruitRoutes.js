// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Load express
const express = require('express');

// Create a special router object for our routes
const router = express.Router();

// Load our fruits data
// const fruits = require('../models/fruits')

// Loading our Fruit model
const Fruit = require('../models/fruit')

 // Setup our "root" route

//  router.get('/', (req, res) => {
//     res.send('<h1>Hello Fruits</h1>');
// });

// Setup "index" routes
router.get('/', (req, res) => {
    // res.send(fruits);
    // res.render('fruits/Index', {fruits: fruits});

    // Find takes two arguments
    // 1. An object with our query (to filter our data and find exactly what we need)
    // 2. Callback function (with an error object and the found data)
    Fruit.find({}, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Index', {fruits: foundFruit})

        }
    })
});

// Setup "new" route
router.get('/new', (req, res) => {
    // res.send('<form>Create fruit</form>');
    res.render('fruits/New')
});

// Setup "create" route
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Fruit.create(req.body, (err, createdFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    })

    // fruits.push(req.body)
    // res.redirect('/fruits')
})
// ?name=apple&color=red&readyToEat=value

// Setup "show" route
router.get('/:id', (req, res) => {
    // res.send(fruits[req.params.index]);
    // res.render('fruits/Show', {fruit: fruits[req.params.index]});

    // findById accepts two arguments:
    // 1st: the id of the document in our database
    // 2nd: Callback (with error object and found document)
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Show', {fruit: foundFruit});
        }
    });
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