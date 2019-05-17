'use strict';

//these next two lines are necessary parts of the process to set up Express
const express = require('express');
const app = express();

const { quotes } = require('./quotes');

app.get('/', (req, res) => {
    res.send(quotes[Math.floor(Math.random() * quotes.length)])
});
app.listen(3000);
