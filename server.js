"use strict";

const http = require('http');

const { quotes } = require('./quotes')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write(quotes[Math.floor(Math.random() * quotes.length)]);
    res.end();
}).listen(3000);





