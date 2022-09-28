// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Load express
const express = require('express');

// Create a special router object for our routes
const router = express.Router();

// Bring in controller object (with methods attached)
// const meatController = require('../controllers/meatController')
// Example: router.get('/', meatController.findAllMeats)

// Bring in controller functions (destructure method)
const { findAllMeats, showNewView, deleteOneMeat, updateOneMeat, createNewMeat, showEditView, seedStarterData, showOneMeat } = require('../controllers/meatController')

// Setup "index" routes
router.get('/', findAllMeats);

// Setup "new" route
router.get('/new', showNewView);

// Setup "destroy" route
router.delete('/:id', deleteOneMeat);

// Setup "update" route
router.put('/:id', updateOneMeat);

// Setup "create" route
router.post('/', createNewMeat);

// Setup "edit" route
router.get('/:id/Edit', showEditView);

// Setup "seed" route
router.get('/seed', seedStarterData);

// Setup "show" route
router.get('/:id', showOneMeat)


module.exports = router;