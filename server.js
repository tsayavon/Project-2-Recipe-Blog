// Dependencies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');


    // Initializing express app
const app = express();
const PORT = process.env.PORT || 4000;

require('dotenv').config();

//Middleware
app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
//Routes
const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);

app.listen(PORT, () => 
console.log(`Listening on port ${PORT}...`))


