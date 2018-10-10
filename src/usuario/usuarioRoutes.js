'use strict';

module.exports = function (app) {
  const usuario = require('./usuarioController');
  const autenticacao = require('../autenticacao/autenticacaoController');
  const autentica = autenticacao.authenticate;
  const autorizaUsuario = autenticacao.authorizeByUser;

  app.route('/usuario')
    .get(autentica, usuario.listaUsuarios)
    .post(usuario.criaUsuario);

  app.route('/usuario/:username')
    .get(autentica, usuario.getUsuario)
    .put(autentica, autorizaUsuario, usuario.atualizaUsuario)
    .delete(autentica, autorizaUsuario, usuario.deletaUsuario);
}