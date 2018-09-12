const express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    fs = require('fs'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3000,
    cache = require('memory-cache'),
    swagger = require('swagger-express'),
    mongoose = require('mongoose');

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('tiny', { stream: accessLogStream }))

app.use('/static', express.static(__dirname + '/static'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(swagger.init(app, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    swaggerURL: '/swagger',
    swaggerJSON: '/api-docs.json',
    swaggerUI: './public/swagger',
    basePath: 'http://localhost:3000',
    apis: ['./api/routes/quizzRoutes.js']
}));

let routes = require('./api/routes/quizzRoutes');
routes(app);

mongoose.connect('mongodb://localhost/test');

cache.put('foo', 'bar');
console.log(cache.get('foo'));

// that wasn't too interesting, here's the good part

cache.put('houdini', 'disappear', 100, function (key, value) {
    console.log(key + ' did ' + value);
}); // Time in ms

console.log('Houdini will now ' + cache.get('houdini'));

setTimeout(function () {
    console.log('Houdini is ' + cache.get('houdini'));
}, 200);


// create new cache instance
var newCache = new cache.Cache();

newCache.put('foo', 'newbaz');

setTimeout(function () {
    console.log('foo in old cache is ' + cache.get('foo'));
    console.log('foo in new cache is ' + newCache.get('foo'));
}, 200);

app.use('/', function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
})

app.post('/', function (req, res) {
    res.end(JSON.stringify(req.body, null, 2))
})

app.get('/', (req, res) => {
    res.send(JSON.stringify({ mensagem: 'olar' }));
})

app.get('/disciplina/:id', (req, res) => {
    res.send(JSON.stringify({ cod: 123, nome: 'webdev' }))
})

app.post('/disciplina/:id/atividade', (req, res) => {
    res.send(JSON.stringify({ cod: 789, descricao: 'atividade' }))
})

app.get('/disciplina/:id/atividade', (req, res) => {
    res.send(JSON.stringify([{ cod: 123, nome: 'web' }, { cod: 234, nome: 'dev' }]))
})

app.get('/disciplina/:id/atividade/:id', (req, res) => {
    res.send(JSON.stringify({ cod: 456, descricao: 'atividade' }))
})

app.put('/disciplina/:id/atividade/:id', (req, res) => {
    res.send(JSON.stringify({ cod: 12, descricao: 'atividade respondida/editada' }))
})

app.listen(port, () => console.log(`App running on port ${port}`))

module.exports = app