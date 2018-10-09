'use strict';

module.exports = (app) => {
    var autenticacaoCtrl = require('./autenticacaoController');

    app.route('/autenticacao')
        .post(autenticacaoCtrl.login);
}