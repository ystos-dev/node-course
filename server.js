const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3001;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.use((req, rest, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', (err) => {
        console.log(err);
    });
    next();
});

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.use((req, resp, next) => {
    resp.render('maitanance.hbs', {
        pageTitle: 'Under the maitanance',
        welcomeMessage: "Please, wait for a while"
    })
});

app.get('/', (request, response) => {
    response.render('home.hbs', {
        pageTitle: 'About page',
        welcomeMessage: "Welcome"
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About page'
    });
})

app.get('/bad', (request, response) => {
    response.send({
        error: "Error handling request"
    });
})

app.listen(port);