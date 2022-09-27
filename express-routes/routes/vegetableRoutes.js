// Load express
const express = require('express');

// Load our vegetables data
// const vegetables = require('../models/vegetables')
const Vegetable = require('../models/vegetable')


// Create a special router object for our routes
const router = express.Router();

// Setup "index" routes
router.get('/', (req, res) => {
    // res.send(vegetables)
    Vegetable.find({}, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Index', {vegetables: foundVegetable})

        }
    })
});

router.get('/New', (req, res) => {
    // res.send('<form>Create vegetable</form>');
    res.render('vegetables/New');
});

router.post('/', (req, res) => {
    // vegetables.push(req.body);
    // res.redirect('/vegetables');

    Vegetable.create(req.body, (err, createdVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    })
});

router.get('/:id', (req, res) => {
    // res.send(vegetables[req.params.index]);
    // res.render('vegetables/Show', {vegetable: vegetables[req.params.index]});
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Show', {vegetable: foundVegetable});
        }
    });

})

router.get('/:index/Edit', (req, res) => {
    res.render('vegetables/Edit', {vegtable: vegetables[req.params.index]});
});

module.exports = router;