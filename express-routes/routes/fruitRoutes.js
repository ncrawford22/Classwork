// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Load express
const express = require('express');

// Create a special router object for our routes
const router = express.Router();

// Bring in controller object (with methods attached)
// const fruitController = require('../controllers/fruitController')
// Example: router.get('/', fruitController.findAllFruits)

// Bring in controller functions (destructure method)
const { findAllFruits, showNewView, createNewFruit, deleteOneFruit, updateOneFruit, showEditView, showOneFruit, seedStarterData } = require('../controllers/fruitController')

 // Setup our "root" route

//  router.get('/', (req, res) => {
//     res.send('<h1>Hello Fruits</h1>');
// });

// Setup "index" routes
router.get('/', findAllFruits);

// Setup "new" route
router.get('/new', showNewView);

// Setup "destroy" route
router.delete('/:id', deleteOneFruit);

// Setup "update" route
router.put('/:id', updateOneFruit);

// Setup "create" route
router.post('/', createNewFruit);

// Setup "edit" route
router.get('/:id/Edit', showEditView);

// Setup "seed" route
router.get('/seed', seedStarterData);
// Setup "show" route
router.get('/:id', showOneFruit)


module.exports = router;