'use strict';

exports.listaCards = function (req, res) {
  res.send('todos os cards');
};

exports.criaCard = function (req, res) {
  res.send('cria um card novo');
};

exports.getCard = function (req, res) {
  res.send('retorna o card solicitado');
};

exports.atualizaCard = function (req, res) {
  res.send('edita um card existente');
};

exports.deletaCard = function (req, res) {
  res.send('deleta um card especifico');
};
