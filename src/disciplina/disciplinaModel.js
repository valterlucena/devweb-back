const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisciplinaSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: String
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);