'use strict';

module.exports = function (app) {
  var usuario = require('./usuarioController');

  app.route('/usuario')
    .get(usuario.listaUsuarios)
    .post(usuario.criaUsuario);

  app.route('/usuario/:usuarioId')
    .get(usuario.getUsuario)
    .put(Usuario.atualizaUsuario)
    .delete(usuario.deletaUsuario);

}