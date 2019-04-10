const express = require('express');
const consign = require('consign');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const minifyHTML = require('express-minify-html');
const helmet = require('helmet');
const expressSession = require('express-session');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('assets/public'));

app.use(minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
        collapseBooleanAttributes: true,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        minifyJS: true
    }
}));

app.use(helmet());

app.use(expressSession({
    secret: 'd1702e8656ee7fd312e51f53c25fa2e76a175006',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

consign()
    .include('app/routes')
    .then('app/controllers')
    .then('app/models')
    .then('config/database.js')
    .into(app);

module.exports = app;