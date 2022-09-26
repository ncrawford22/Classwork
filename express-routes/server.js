// Load express
const express = require('express');


// Bring in our packaged route
const fruitRoutes = require('./routes/fruitRoutes');
const meatRoutes = require('./routes/meatRoutes');
const vegetableRoutes = require('./routes/vegetableRoutes');


// Creates our express app (object)
const app = express();


// Creates a port
const PORT = process.env.PORT || 3000;

// Setup our view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middleware
app.use(express.urlencoded({extended:false}));
app.use('/fruits', fruitRoutes); // First argument Adds base route
app.use('/meats', meatRoutes);
app.use('/vegetables', vegetableRoutes);

   
// Listen to Port
app.listen(PORT,() => {
    console.log('listening on port' , PORT);
});