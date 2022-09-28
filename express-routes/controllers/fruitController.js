const Fruit = require('../models/fruit');

// Bring in our seed data
const seed = require('../models/seed')


// ROUTE    GET /fruits     (index)
const findAllFruits = (req, res) => {
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
    });
}

// ROUTE    Get /fruits/new    (new)
const showNewView = (req, res) => {
    // res.send('<form>Create fruit</form>');
    res.render('fruits/New');
}

// ROUTE    DELETE /fruits/:id    (destroy)
const deleteOneFruit = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a fruit at index! (in Database)');
    Fruit.findByIdAndDelete(req.params.id, (err, deleteFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    });
}

// ROUTE    Put /fruits/:id    (update)
const updateOneFruit = (req, res) => {
    console.log(req.body)

    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    // findByIdAndUpdate takes 4 arguments:
    // 1. The id
    // 2. New data we want to use to update the old document
    // 3. (Optional): An options object, which looks like this: { new: true} = foundFruit
    // 4. Callback (with error object and updatedFruit or foundFruit)
    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/fruits/${updatedFruit._id}`)
        }
    });
    // res.send('Updating a new fruit at index! (in Database)');
}

// ROUTE    POST /fruits    (create)
const createNewFruit = (req, res) => {
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
    });
    // fruits.push(req.body)
    // res.redirect('/fruits')
// ?name=apple&color=red&readyToEat=value
}

// ROUTE      GET /fruits/:id/edit     (edit)
const showEditView = (req, res) => {
    // res.render('fruits/Edit', {fruit: fruits[req.params.index]});
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Edit', {fruit: foundFruit})
        }
    });
}

// ROUTE    Get /fruits/:id    (show)
const showOneFruit = (req, res) => {
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
}

// ROUTE       GET /fruits/seed      (seed)
const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Fruit.deleteMany({}, (err, deletedFruits) => {
        if (err) {
            res.status(400).json(err)
        } else {
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Fruit.create(seed.fruits, (err, createdFruit) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/fruits')
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
    findAllFruits,
    showNewView,
    createNewFruit,
    showOneFruit,
    seedStarterData,
    showEditView,
    updateOneFruit,
    deleteOneFruit
}