const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisciplinaSchema = new Schema({
    codigo: String,
    nome: String,
    descricao: String,
    professor: String
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);