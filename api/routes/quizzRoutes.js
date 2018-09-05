'use strict';

module.exports = function (app) {
  var quizz = require('../controllers/quizzController');

  app.route('/cards')
    .get(quizz.listaCards)
    .post(quizz.criaCard);

  app.route('/cards/:cardId')
    .get(quizz.getCard)
    .put(quizz.atualizaCard)
    .delete(quizz.deletaCard);

}