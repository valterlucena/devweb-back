const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListaSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    cards: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Card'
            }
        ],
        default: []
    }
});

module.exports = mongoose.model('Lista', ListaSchema);