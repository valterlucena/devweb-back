'use strict';

/**
 * @swagger
 * resourcePath: /api
 * description: All about API
 */

module.exports = function (app) {
  var quizz = require('./quizzController');

  app.route('/cards')
    .get(quizz.listaCards)
    .post(quizz.criaCard);

  app.route('/cards/:cardId')
    .get(quizz.getCard)
    .put(quizz.atualizaCard)
    .delete(quizz.deletaCard);

}