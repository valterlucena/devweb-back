const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizzSchema = new Schema({
    cards: String,
});

module.exports = mongoose.model('Quizz', QuizzSchema);