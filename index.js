const express = require('express')
const app = express()
const port = 3000

var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

app.use(morgan('tiny', {stream: accessLogStream}))

app.use('/static', express.static(__dirname+'/static'))

app.use('/', function(req, res, next){
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/', (req, res) => {
    res.send(JSON.stringify({mensagem: 'olar'}));
})

app.get('/disciplina/:id', (req, res) => {
    res.send(JSON.stringify({cod: 123, nome: 'webdev'}))
})

app.post('/disciplina/:id/atividade', (req, res) => {
    res.send(JSON.stringify({cod: 789, descricao: 'atividade'}))
})

app.get('/disciplina/:id/atividade', (req, res) => {
    res.send(JSON.stringify([{cod: 123, nome: 'web'}, {cod: 234, nome: 'dev'}]))
})

app.get('/disciplina/:id/atividade/:id', (req, res) => {
    res.send(JSON.stringify({cod: 456, descricao: 'atividade'}))
})

app.put('/disciplina/:id/atividade/:id', (req, res) => {
    res.send(JSON.stringify({cod: 12, descricao: 'atividade respondida/editada'}))
})

app.listen(port, () => console.log(`App running on port ${port}`))

module.exports = app