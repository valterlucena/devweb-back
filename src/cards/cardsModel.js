const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardsSchema = new Schema({
    termos: [String],
    deficoes: [String]
});

module.exports = mongoose.model('Cards', CardsSchema);