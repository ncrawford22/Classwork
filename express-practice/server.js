/* Basic Structure of Express App

- Require modules

const express = require('express');

- Create the Express app

const app = express();

- Configure the app (app.set)

const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine

- Mount middleware (app.use)


- Mount routes

app.get('/', function(req, res) {
  	res.send('<h1>Hello World!</h1>');
});

- Tell the app to listen on port 3000

app.listen(3000, function() {
 console.log('Listening on port 3000');
});





*/



// Load Express
const { request } = require('express');
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route (Home page) directly on app
// Pass it two arguments: 1. Path "/" 2. Callback function: "Homies".. Req (request object) & Res (response object)

/*
The request object has properties and methods used to access info regarding the current HTTP request, including any data being sent from the browser.
The response object contains properties and methods used to end the request/response cycle - like we've done so far using the res.send method 
*/

// app.get('/', function(req, res) {
//     res.send('<h1>Hello World!</h1>');
// });

// app.get('/', (req, res) => {
//     res.send('<h1>Hello Nathan!</h1>');
// });

// app.get('/home', (req, res) => {
//     res.send('<h1>Home Page</h1>');
// });

// Tell the app to listen on port 3000
// for HTTP request from clients
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

const fs = require('fs') // this engine requires the fs module like we did Saturday

app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})

app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine

app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
  })
  
  app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
  })
  
  app.get('/another-one', (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
  })