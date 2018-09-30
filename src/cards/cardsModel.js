const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardsSchema = new Schema({
    cards: [{
        termo: String,
        definicao: String
    }]
});

module.exports = mongoose.model('Cards', CardsSchema);