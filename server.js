// Import Module global
const express = require('express');
const {
    engine
} = require('express-handlebars');
const app = express();
// FakeDB
const fkdb = require('./api/config/db')
const { inc, upper } = require('./helpers')

// Config Handlebars
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout:"main",
    adminLayout: "adminLayout",
    helpers: {
        inc, upper
    }
}));

// Route fichier static
app.use('/assets', express.static('public'))

app.set('view engine', '.hbs');
app.set('views', './views');

// Router
const ROUTER = require("./api/router");
app.use(ROUTER); 

// Run server
app.listen(3000);

// nodemailer



