const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['aluno', 'professor']
    },
    disciplinas: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Usuario', UsuarioSchema);