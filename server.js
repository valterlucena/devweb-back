const express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    fs = require('fs'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3000;

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('tiny', { stream: accessLogStream }))

app.use('/static', express.static(__dirname + '/static'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var routes = require('./api/routes/quizzRoutes');
routes(app);


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