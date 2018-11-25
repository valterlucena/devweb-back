const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    termo: String,
    definicao: String
});

module.exports = mongoose.model('Card', CardSchema);