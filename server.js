// Dependencies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


// Initializing express app
const app = express();
const PORT = process.env.PORT || 4000;

require('dotenv').config();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use(cookieParser('RecipeBlogSecure'));
app.use(session({
    secret: 'RecipeBlogSecretSession',
    saveUninitialized: true,
    resave: true,
}));
app.use(flash());
app.use(fileUpload());

//Routes
const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);

app.listen(process.env.PORT, () =>
    console.log(`🌟Listening on port ${PORT}...🌟`))


