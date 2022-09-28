// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Load express
const express = require('express');

// Create a special router object for our routes
const router = express.Router();

// Bring in controller object (with methods attached)
// const vegetableController = require('../controllers/vegetableController')
// Example: router.get('/', vegetableController.findAllVegetables)

// Bring in controller functions (destructure method)
const { findAllVegetables, showNewView, deleteOneVegetable, updateOneVegetable, createNewVegetable, showEditView, seedStarterData, showOneVegetable } = require('../controllers/vegetableController')

// Setup "index" routes
router.get('/', findAllVegetables);

// Setup "new" route
router.get('/new', showNewView);

// Setup "destroy" route
router.delete('/:id', deleteOneVegetable);

// Setup "update" route
router.put('/:id', updateOneVegetable);

// Setup "create" route
router.post('/', createNewVegetable);

// Setup "edit" route
router.get('/:id/Edit', showEditView);

// Setup "seed" route
router.get('/seed', seedStarterData);

// Setup "show" route
router.get('/:id', showOneVegetable)

module.exports = router;