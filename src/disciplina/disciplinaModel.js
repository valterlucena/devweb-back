const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisciplinaSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: String,
    listas: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Cards'
            }
        ]
    }
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);