// Load express
const express = require('express');
const mongoose = require('mongoose');

// Bring in our packaged route
const fruitRoutes = require('./routes/fruitRoutes');
const meatRoutes = require('./routes/meatRoutes');
const vegetableRoutes = require('./routes/vegetableRoutes');

require('dotenv').config();

// Creates our express app (object)
const app = express();


// Creates a port
const PORT = process.env.PORT;

// Setup our view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middleware
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));

app.use('/fruits', fruitRoutes); // First argument Adds base route
app.use('/meats', meatRoutes);
app.use('/vegetables', vegetableRoutes);

mongoose.connect(process.env.MONGO_DB);
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB!');
});
   
// Listen to Port
app.listen(PORT,() => {
    console.log('listening on port' , PORT);
});