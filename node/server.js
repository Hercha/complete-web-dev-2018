/* const http = require('http');

const server = http.createServer((request, response) => {
    //console.log('I hear you! thanks for the request');
    //console.log('headers', request.headers);
    console.log('method', request.method);
    console.log('url', request.url);
    // response.setHeader('Content-Type', 'text/html');
    // response.end('<h1>Hello</h1>');
    const user = {
        name: 'John',
        hobby: 'Skating'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

server.listen(3000); */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* app.get('/', (req, res) => {
    //res.send("<h1>Hello</h1>");
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user);
}); */

/* app.get('/profile', (req, res) => {
    res.send("getting profile");
});

app.get('/', (req, res) => {
    res.send("getting root");
});

app.post('/profile', (req, res) => {
    //res.send("<h1>Hello</h1>");
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user);
}); */

/* app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); */
/* app.use((req, res, next) => {
    console.log('<h1>HELLLOO</h1>');
    next();
}); */
/* app.get('/:id', (req, res) => {
    //console.log(req.query);
    //console.log(req.headers);
    console.log(req.params);
    res.send("getting root");
}); */

/* app.get('/profile', (req, res) => {
    res.send("getting root");
});

app.post('/profile', (req, res) => {
    console.log(req.body);
    res.send("Success");
}); */

app.use(express.static(__dirname + '/public'))

app.listen(3000);