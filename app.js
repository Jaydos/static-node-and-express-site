const express = require('express');
const data = require('./data');

const app = express();

// Setup view engine.
app.set('view engine', 'pug');

// Serve static files.
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {data: data.projects});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project/:id', (req, res) => {

    res.render('project', {id: parseInt(req.params.id), data: data.projects});
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});