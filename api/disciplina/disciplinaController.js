'use strict';

exports.listaDisciplinas = function (req, res) {
  res.send('todas as disciplinas');
};

exports.criaDisciplina = function (req, res) {
  res.send('cria uma nova disciplina');
};

exports.getDisciplina = function (req, res) {
  res.send('retorna a disciplina solicitada');
};

exports.atualizaDisciplina = function (req, res) {
  res.send('edita uma disciplina existente');
};

exports.deletaDisciplina = function (req, res) {
  res.send('deleta uma disciplina especifica');
};