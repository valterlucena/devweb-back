'use strict';

module.exports = function (app) {
  var lista = require('./listaController');

  app.route('/lista')
    .get(lista.listaListas)
    .post(lista.criaLista);

  app.route('/lista/:listaId')
    .get(lista.getLista)
    .put(lista.atualizaLista)
    .delete(lista.deletaLista);

  app.route('/lista/:listaId/card')
    .post(lista.addCardLista);
  
  app.route('/lista/:listaId/card/:cardId')
    .delete(lista.removeCardLista);
  
}