'use strict';

/**
 * @swagger
 * resourcePath: /api
 * description: All about API
 */

module.exports = function (app) {
  var cards = require('./cardsController');

  app.route('/cards')
    .get(cards.listaCards)
    .post(cards.criaCard);

  app.route('/cards/:cardId')
    .get(cards.getCard)
    .put(cards.atualizaCard)
    .delete(cards.deletaCard);

}