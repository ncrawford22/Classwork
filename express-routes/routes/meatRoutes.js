// Load express
const express = require('express');

// Load our meats data
// const meats = require('../models/meats')
const Meat = require('../models/meat')


// Create a special router object for our routes
const router = express.Router();

// Setup "index" routes
 router.get('/', (req, res) => {
    // res.send(meats)
    // res.render('meats/Index', {meats: meats});
    Meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Index', {meats: foundMeat})

        }
    })
});

router.get('/new', (req, res) => {
    // res.send('<form>Create meat</form>');
    res.render('meats/New');
});

router.post('/', (req, res) => {
    // meats.push(req.body);
    // res.redirect('/meats');
    Meat.create(req.body, (err, createdMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    })
});

router.get('/:id', (req, res) => {
    // res.send(meats[req.params.index]);
    // res.render('meats/Show', {meat: meats[req.params.index]});
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Show', {meat: foundMeat});
        }
    });
})

router.get('/:index/edit', (req, res) => {
    res.render('meats/Edit', {meat: meats[req.params.index]});
});

module.exports = router;
