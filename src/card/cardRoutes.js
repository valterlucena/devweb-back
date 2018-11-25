'use strict';

module.exports = function (app) {
  var card = require('./cardController');

  app.route('/card')
    .get(card.listaCards)
    .post(card.criaCard);

  app.route('/card/:cardId')
    .get(card.getCard)
    .put(card.atualizaCard)
    .delete(card.deletaCard);

}