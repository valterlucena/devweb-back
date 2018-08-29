const express = require('express')
const app = express()
const port = 3000

var morgan = require('morgan')

morgan('tiny')

app.use('/static', express.static(__dirname+'/static'))

app.use('/', function(req, res, next){
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/', (req, res) => {
    res.send(JSON.stringify({value: 1}));
})

app.get('/login', (req, res) => {
    res.send(JSON.stringify({id: 1, nome: 'joao'}))
})

app.get('/aluno/:id/disciplina/:id', (req, res) => {
    res.send(JSON.stringify({cod: 123, nome: 'webdev'}))
})

app.get('/professor/:id', (req, res) => {
    res.send(JSON.stringify({id: 12, nome: 'matheus'}))
})

app.post('/professor/:id/criar-atividade/', (req, res) => {
    res.send(JSON.stringify({cod: 4, descricao: 'definicoes'}))
})

app.put('/professor/:id/atividade/:id', (req, res) =>{
    res.send(JSON.stringify({cod: 4, descricao: 'definicoes de hj'}))
})

app.listen(port, () => console.log(`App running on port ${port}`))

module.exports = app