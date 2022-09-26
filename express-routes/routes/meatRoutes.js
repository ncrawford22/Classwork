// Load express
const express = require('express');

// Load our meats data
const meats = require('../models/meats')

// Create a special router object for our routes
const router = express.Router();

 // Setup our "root" route

 router.get('/', (req, res) => {
    // res.send(meats)
    res.render('meats/Index', {meats: meats});

});

router.get('/new', (req, res) => {
    // res.send('<form>Create meat</form>');
    res.render('meats/New');
});

router.post('/', (req, res) => {
    meats.push(req.body);
    res.redirect('/meats');
});

router.get('/:index', (req, res) => {
    // res.send(meats[req.params.index]);
    res.render('meats/Show', {meat: meats[req.params.index]});
})

router.get('/:index/edit', (req, res) => {
    res.render('meats/Edit', {meat: meats[req.params.index]});
});

module.exports = router;
