const Vegetable = require('../models/vegetable');

// Bring in our seed data
const seed = require('../models/seed')


// ROUTE    GET /vegetables     (index)
const findAllVegetables = (req, res) => {
    // res.send(vegetables);
    // res.render('vegetables/Index', {vegetables: vegetables});

    // Find takes two arguments
    // 1. An object with our query (to filter our data and find exactly what we need)
    // 2. Callback function (with an error object and the found data)
    Vegetable.find({}, (err, foundVegetables) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Index', {vegetables: foundVegetables})

        }
    });
}

// ROUTE    Get /vegetables/new    (new)
const showNewView = (req, res) => {
    // res.send('<form>Create vegetable</form>');
    res.render('vegetables/New');
}

// ROUTE    DELETE /vegetables/:id    (destroy)
const deleteOneVegetable = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a vegetable at index! (in Database)');
    Vegetable.findByIdAndDelete(req.params.id, (err, deleteVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    });
}

// ROUTE    Put /vegetables/:id    (update)
const updateOneVegetable = (req, res) => {

    // findByIdAndUpdate takes 4 arguments:
    // 1. The id
    // 2. New data we want to use to update the old document
    // 3. (Optional): An options object, which looks like this: { new: true} = foundVegetable
    // 4. Callback (with error object and updatedVegetable or foundVegetable)
    Vegetable.findByIdAndUpdate(req.params.id, req.body, (err, updatedVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/vegetables/${updatedVegetable._id}`)
        }
    });
    // res.send('Updating a new vegetable at index! (in Database)');
}

// ROUTE    POST /vegetables    (create)
const createNewVegetable = (req, res) => {

    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Vegetable.create(req.body, (err, createdVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    });
    // vegetables.push(req.body)
    // res.redirect('/vegetables')
// ?name=apple&color=red&readyToEat=value
}

// ROUTE      GET /vegetables/:id/edit     (edit)
const showEditView = (req, res) => {
    // res.render('vegetables/Edit', {vegetable: vegetables[req.params.index]});
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Edit', {vegetable: foundVegetable})
        }
    });
}

// ROUTE    Get /vegetables/:id    (show)
const showOneVegetable = (req, res) => {
    // res.send(vegetables[req.params.index]);
    // res.render('vegetables/Show', {vegetable: vegetables[req.params.index]});

    // findById accepts two arguments:
    // 1st: the id of the document in our database
    // 2nd: Callback (with error object and found document)
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Show', {vegetable: foundVegetable});
        }
    });
}

// ROUTE       GET /vegetables/seed      (seed)
const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Vegetable.deleteMany({}, (err, deletedVegetables) => {
        if (err) {
            res.status(400).json(err)
        } else {
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Vegetable.create(seed.vegetables, (err, createdVegetable) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/vegetables')
                }
            })
        }
    });
}

// Examples:
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



module.exports = {
    findAllVegetables,
    showNewView,
    createNewVegetable,
    showOneVegetable,
    seedStarterData,
    showEditView,
    updateOneVegetable,
    deleteOneVegetable
}