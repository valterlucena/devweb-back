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
}