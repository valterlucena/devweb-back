'use strict';

module.exports = function (app) {
  const user = require('./userController');
  const autenticacao = require('../autenticacao/autenticacaoController');
  const autentica = autenticacao.authenticate;
  const autorizaUsuario = autenticacao.authorizeByUser;

  app.route('/user')
    .get(autentica, user.listaUsuarios)
    .post(user.criaUsuario);

  app.route('/user/:username')
    .get(autentica, user.getUsuario)
    .put(autentica, autorizaUsuario, user.atualizaUsuario)
    .delete(autentica, autorizaUsuario, user.deletaUsuario);
}