// Load express
const express = require('express');

// Load our vegetables data
const vegetables = require('../models/vegetables')

// Create a special router object for our routes
const router = express.Router();

 // Setup our "root" route

router.get('/', (req, res) => {
    // res.send(vegetables)
    res.render('vegetables/Index', {vegetables: vegetables});

});

router.get('/New', (req, res) => {
    // res.send('<form>Create vegetable</form>');
    res.render('vegetables/New');
});

router.post('/', (req, res) => {
    vegetables.push(req.body);
    res.redirect('/vegetables');
});

router.get('/:index', (req, res) => {
    // res.send(vegetables[req.params.index]);
    res.render('vegetables/Show', {vegetable: vegetables[req.params.index]});

})

router.get('/:index/Edit', (req, res) => {
    res.render('vegetables/Edit', {vegtable: vegetables[req.params.index]});
});

module.exports = router;