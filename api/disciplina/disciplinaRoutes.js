'use strict';

module.exports = function (app) {
  var disciplina = require('./disciplinaController');

  app.route('/disciplina')
    .get(disciplina.listaDisciplinas)
    .post(disciplina.criaDisciplina);

  app.route('/disciplina/:disciplinaId')
    .get(disciplina.getDisciplina)
    .put(disciplina.atualizaDisciplina)
    .delete(disciplina.deletaDisciplina);

}