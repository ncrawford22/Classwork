const Meat = require('../models/meat');

// Bring in our seed data
const seed = require('../models/seed')

// ROUTE    GET /meats     (index)
const findAllMeats = (req, res) => {
    // res.send(Meats);
    // res.render('Meats/Index', {Meats: Meats});

    // Find takes two arguments
    // 1. An object with our query (to filter our data and find exactly what we need)
    // 2. Callback function (with an error object and the found data)
    Meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Index', {meats: foundMeat})

        }
    });
}

// ROUTE    Get /meats/new    (new)
const showNewView = (req, res) => {
    // res.send('<form>Create Meat</form>');
    res.render('meats/New');
}

// ROUTE    DELETE /meats/:id    (destroy)
const deleteOneMeat = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a Meat at index! (in Database)');
    Meat.findByIdAndDelete(req.params.id, (err, deleteMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    });
}

// ROUTE    Put /meats/:id    (update)
const updateOneMeat = (req, res) => {
    console.log(req.body)

    // findByIdAndUpdate takes 4 arguments:
    // 1. The id
    // 2. New data we want to use to update the old document
    // 3. (Optional): An options object, which looks like this: { new: true} = foundMeat
    // 4. Callback (with error object and updatedMeat or foundMeat)
    Meat.findByIdAndUpdate(req.params.id, req.body, (err, updatedMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/meats/${updatedMeat._id}`)
        }
    });
    // res.send('Updating a new Meat at index! (in Database)');
}

// ROUTE    POST /meats    (create)
const createNewMeat = (req, res) => {
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Meat.create(req.body, (err, createdMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    });
    // Meats.push(req.body)
    // res.redirect('/meats')
// ?name=apple&color=red&readyToEat=value
}

// ROUTE      GET /meats/:id/edit     (edit)
const showEditView = (req, res) => {
    // res.render('meats/Edit', {meat: meats[req.params.index]});
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Edit', {meat: foundMeat})
        }
    });
}

// ROUTE    Get /meats/:id    (show)
const showOneMeat = (req, res) => {
    // res.send(meats[req.params.index]);
    // res.render('meats/Show', {meat: meats[req.params.index]});

    // findById accepts two arguments:
    // 1st: the id of the document in our database
    // 2nd: Callback (with error object and found document)
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Show', {meat: foundMeat});
        }
    });
}

// ROUTE       GET /meats/seed      (seed)
const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Meat.deleteMany({}, (err, deletedMeats) => {
        if (err) {
            res.status(400).json(err)
        } else {
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Meat.create(seed.meats, (err, createdMeat) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/meats')
                }
            })
        }
    });
}

// ROUTE       GET /meats/clear      (clear)
const clearData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Meat.deleteMany({}, (err, deletedMeats) => {
        if (err) {
            res.status(400).json(err)
        } else {
            // Data has been successfully deleted
                res.status(200).redirect('/meats')
            }
    })
}


module.exports = {
    findAllMeats,
    showNewView,
    createNewMeat,
    showOneMeat,
    seedStarterData,
    showEditView,
    updateOneMeat,
    deleteOneMeat,
    clearData
}